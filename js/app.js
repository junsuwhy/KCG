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
                    imageFile: imageFileName
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

// 更新當前卡片顯示
function updateCurrentCardDisplay(card) {
    currentCardDisplay.style.display = 'block';
    currentCardDisplay.innerHTML = `
        抽到了: <span class="${card.color === 'red' ? 'red' : 'black'}">
            ${card.name}
        </span>
    `;
}

// 啟動遊戲
document.addEventListener('DOMContentLoaded', init);

// 清理資源（例如在組件卸載時）
export function cleanupGame() {
    cleanup(); // 調用 animation.js 的清理函數
}