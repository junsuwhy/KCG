import * as THREE from '../node_modules/three/build/three.module.js';
import { setupCollectionSystem, toggleCollection, updateCollectionButton, updateCollectionModal, saveCardsToStorage, loadCardsFromStorage } from './collection.js';
import { initThreeJS, createCardMesh, animateCard, cleanup } from './animation.js';

// 導出卡牌類型資料
export function getCardTypes() {
    return [...cardTypes]; // 返回卡牌類型的混製，避免直接修改原始數據
}

// 卡牌遊戲主要邏輯

// 卡牌種類
let cardTypes = [];

// 從 CSV 讀取卡牌資料
async function loadCardsFromCSV() {
    try {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSniLwHat28siwAkCjIOdq9C5WzeG3C2WN7l5XkHNrHu0UezGTz3ZPvu9hNNPqmfefx8qUNHOFuU9uX/pub?output=csv';
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        const lines = csvText.split('\n').filter(line => line.trim());
        
        // 跳過標題行
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            const columns = line.split(',');
            const name = columns[0];
            const suit = columns[1];
            const color = columns[2];
            const value = columns[3];
            
            if (name && suit && color && value) {
                // 修正圖片檔名格式
                let imageFileName;
                if (suit === 'joker') {
                    imageFileName = `joker-${color}.jpg`;
                } else {
                    imageFileName = `${suit}-${value}.jpg`.toLowerCase();
                }
                
                cardTypes.push({
                    id: i,
                    name,
                    color,
                    suit,
                    value,
                    person: columns[4],
                    title: columns[5],
                    quote: columns[6],
                    imageFile: imageFileName,
                    startDate: columns[10] !== '#N/A' ? columns[10] : null,
                    endDate: columns[11] !== '#N/A' ? columns[11] : null,targetCount: columns[12] && columns[12] !== '#N/A' ? (function() {
                        try {
                            return parseInt((columns[12] || '0').toString().replace(/,/g, ''));
                        } catch(e) {
                            return null;
                        }
                    })() : null,
                    currentCount: columns[13] && columns[13] !== '#N/A' ? (function() {
                        try {
                            return parseInt((columns[13] || '0').toString().replace(/,/g, ''));
                        } catch(e) {
                            return null;
                        }
                    })() : null,
                    recallWebsite: columns[14] !== '#N/A' ? columns[14] : null
                });
            }
        }
    } catch (error) {
        console.error('讀取 CSV 檔案失敗:', error);
    }
}

// 遊戲狀態
const gameState = {
    cards: [],          // 收集的卡牌
    isDrawing: false,   // 是否正在抽卡
    currentCard: null,  // 當前抽到的卡牌
    showCollection: false, // 是否顯示集卡書
    newCardsCount: 0,   // 新卡片數量
    uniqueCardTypes: new Set(), // 卡片種類集合
    isDragging: false,  // 是否正在拖曳卡片
    lastMouseX: 0,      // 上一次滑鼠 X 座標
    lastMouseY: 0,      // 上一次滑鼠 Y 座標
    touchStartX: 0,     // 觸控開始的 X 座標
    touchStartY: 0,     // 觸控開始的 Y 座標
    foldAmount: 0,      // 摺疊程度
    targetFoldAmount: 0, // 目標摺疊程度
    maxFoldAmount: Math.PI / 3, // 最大摺疊角度（60度）
    foldSegments: 10,   // 摺疊段數
    foldAnimationSpeed: 0.15, // 摺疊動畫速度
    // 新增滑動慣性所需的變數
    rotationVelocity: 0, // 旋轉速度
    frictionFactor: 0.97, // 摩擦系數（控制減速速率）
    velocityThreshold: 0.001, // 速度閾值，低於此值視為停止
    lastDragTime: 0,  // 最後拖曳時間戳
    dragInterval: 0,   // 拖曳時間間隔
    // 新增回調函數
    onAnimationComplete: null  // 動畫完成後的回調
};

// DOM 元素參考
let mountElement;
let uiContainer;
let currentCardDisplay;
let drawButton;

// 初始化函數
async function init() {
    // 載入卡牌資料
    await loadCardsFromCSV();
    
    // 創建 UI 元素
    createUI();
    
    // 設置動畫完成回調
    gameState.onAnimationComplete = () => {
        drawButton.disabled = false;
        drawButton.textContent = '抽牌';
    };
    
    // 初始化 Three.js
    initThreeJS(mountElement, gameState);
    
    // 初始化集卡書系統
    setupCollectionSystem(mountElement, gameState);
    
    // 加載已收集的卡牌
    loadCardsFromStorage(gameState);
    updateCollectionButton();
}

// 創建 UI 元素
function createUI() {
    mountElement = document.getElementById('root');
    
    // UI 容器
    uiContainer = document.createElement('div');
    uiContainer.className = 'ui-container';
    mountElement.appendChild(uiContainer);
    
    // 當前卡牌顯示
    currentCardDisplay = document.createElement('div');
    currentCardDisplay.className = 'current-card';
    currentCardDisplay.style.display = 'none';
    uiContainer.appendChild(currentCardDisplay);
    
    // 按鈕容器
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';
    buttonsContainer.style.width = '100%';
    buttonsContainer.style.maxWidth = '24rem';
    buttonsContainer.style.gap = '1rem';
    buttonsContainer.style.marginBottom = '2rem';
    uiContainer.appendChild(buttonsContainer);
    
    // 抽牌按鈕
    drawButton = document.createElement('button');
    drawButton.className = 'draw-button';
    drawButton.textContent = '抽牌';
    drawButton.addEventListener('click', drawCard);
    buttonsContainer.appendChild(drawButton);
}

// 修改抽卡功能
async function drawCard() {
    if (gameState.isDrawing) return;
    
    gameState.isDrawing = true;
    drawButton.disabled = true;
    drawButton.textContent = '抽牌中...';
    
    // 隨機選擇一張卡
    const randomIndex = Math.floor(Math.random() * cardTypes.length);
    const newCard = { ...cardTypes[randomIndex], id: Date.now() };
    
    // 更新現有卡片
    gameState.cards.push(newCard);
    gameState.currentCard = newCard;

    // 計算這張卡的數量
    const cardCount = gameState.cards.filter(card => card.name === newCard.name).length;
    newCard.count = cardCount;
    
    // 檢查是否為新種類的卡片
    const isNewCardType = !gameState.uniqueCardTypes.has(newCard.name);
    
    // 更新卡片種類集合
    gameState.uniqueCardTypes.add(newCard.name);
    
    // 只有在抽到新種類的卡片時才增加計數
    if (isNewCardType) {
        gameState.newCardsCount++;
    }
    
    // 更新 UI
    updateCurrentCardDisplay(newCard);
    updateCollectionButton();
    
    // 保存卡片到本地存儲
    saveCardsToStorage(gameState);
    
    // 創建並動畫顯示新卡片
    const newCardMesh = await createCardMesh(newCard);
    animateCard(newCardMesh);
}

// 計算剩餘天數
function calculateRemainingDays(endDateStr) {
    if (!endDateStr) return null;
    
    // 處理日期格式 (轉換 2025/4/26 格式為 2025-04-26)
    let formattedDate = endDateStr;
    if (endDateStr.includes('/')) {
        const parts = endDateStr.split('/');
        const year = parts[0];
        const month = parts[1].padStart(2, '0');
        const day = parts[2].padStart(2, '0');
        formattedDate = `${year}-${month}-${day}`;
    }
    
    const endDate = new Date(formattedDate);
    const today = new Date();
    
    // 設定時間為午夜以確保計算天數準確
    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    
    const timeDiff = endDate.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return dayDiff;
}

// 建立進度條
function createProgressBar(current, target) {
    // 檢查參數是否有效，如果無效則返回空字符串
    if (current === null || target === null || isNaN(current) || isNaN(target) || target <= 0) {
        return '';
    }
    
    try {
        let needCount = target - current;
        let progressBar = '尚缺 '+needCount+' 份';
        
        
        return progressBar;
    } catch (e) {
        console.error('進度條生成錯誤:', e);
        return ''; // 返回空進度條
    }
}

// 更新當前卡片顯示
function updateCurrentCardDisplay(card) {
    currentCardDisplay.style.display = 'block';
    
    const remainingDays = card.endDate ? calculateRemainingDays(card.endDate) : null;
    const isInProgress = card.recallWebsite && remainingDays !== null && remainingDays > 0;
    const progressPercent = card.targetCount && card.currentCount 
        ? Math.min(100, Math.round((card.currentCount / card.targetCount) * 100))
        : null;
    const progressBar = createProgressBar(card.currentCount, card.targetCount);
    
    let cardInfo = `
        <p>抽到 <span class=\"${card.color === 'red' ? 'red' : 'black'}\">${card.person || card.name}</span></p>
        <p>目前持有：${card.count} 張</p>
    `;
    
    if (isInProgress) {
        cardInfo += `<p>目前罷免進行中</p>`;
        cardInfo += `<p>距離罷免收件截止日剩 <span class=\"red-large\">${remainingDays}</span> 天</p>`;
        
        if (card.targetCount !== null && card.currentCount !== null) {
            const remainingCount = card.targetCount - card.currentCount;
            cardInfo += `<p>目標進度：${progressPercent}% 尚欠${remainingCount}份</p>`;
        }
        
        cardInfo += `<p><a href=\"${card.recallWebsite}\" target=\"_blank\" class=\"recall-link\">前往罷免資訊</a></p>`;
    }
    
    currentCardDisplay.innerHTML = cardInfo;
    
    // 添加必要的CSS
    const style = document.createElement('style');
    style.textContent = `
        .red-large {
            color: #dc2626;
            font-size: 1.5rem;
            font-weight: bold;
        }
        .progress-bar {
            font-family: monospace;
            font-size: 1.2rem;
            margin: 0.5rem 0;
            letter-spacing: 2px;
        }
        .recall-link {
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: #dc2626;
            color: white;
            text-decoration: none;
            border-radius: 0.25rem;
            margin-top: 0.5rem;
            font-weight: bold;
            transition: background-color 0.2s;
        }
        .recall-link:hover {
            background-color: #b91c1c;
        }
    `;
    document.head.appendChild(style);
}

// 啟動遊戲
document.addEventListener('DOMContentLoaded', init);

// 清理資源（例如在組件卸載時）
export function cleanupGame() {
    cleanup(); // 調用 animation.js 的清理函數
}