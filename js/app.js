import * as THREE from '../node_modules/three/build/three.module.js';
import { setupCollectionSystem, toggleCollection, updateCollectionButton, updateCollectionModal, saveCardsToStorage, loadCardsFromStorage } from './collection.js';

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
    foldAnimationSpeed: 0.15 // 摺疊動畫速度
};

// DOM 元素參考
let mountElement;
let uiContainer;
let currentCardDisplay;
let drawButton;

// Three.js 相關變數
let scene, camera, renderer;
let cardMesh;
let animationFrameId;
let stars = [];  // 新增：用於存儲星星

// 初始化函數
async function init() {
    // 載入卡牌資料
    await loadCardsFromCSV();
    
    // 創建 UI 元素
    createUI();
    
    // 初始化 Three.js
    initThreeJS();
    
    // 初始化集卡書系統
    setupCollectionSystem(mountElement, gameState);
    
    // 添加事件監聽器
    addEventListeners();
    
    // 開始動畫循環
    animate();
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

// 初始化 Three.js
function initThreeJS() {
    // 創建場景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f5ff);
    
    // 創建相機
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // 創建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountElement.insertBefore(renderer.domElement, mountElement.firstChild);
    
    // 添加更強的燈光效果
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-1, -1, -1);
    scene.add(backLight);
}

// 添加事件監聽器
function addEventListeners() {
    // 處理窗口大小變化
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // 滑鼠事件
    renderer.domElement.addEventListener('mousedown', handleDragStart);
    renderer.domElement.addEventListener('mousemove', handleDragMove);
    renderer.domElement.addEventListener('mouseup', handleDragEnd);
    renderer.domElement.addEventListener('mouseleave', handleDragEnd);

    // 觸控事件
    renderer.domElement.addEventListener('touchstart', handleTouchStart);
    renderer.domElement.addEventListener('touchmove', handleTouchMove);
    renderer.domElement.addEventListener('touchend', handleTouchEnd);
}

// 處理拖曳開始
function handleDragStart(event) {
    if (!cardMesh) return;
    
    gameState.isDragging = true;
    gameState.lastMouseX = event.clientX;
    gameState.lastMouseY = event.clientY;
}

// 處理拖曳移動
function handleDragMove(event) {
    if (!gameState.isDragging || !cardMesh) return;
    
    const deltaX = event.clientX - gameState.lastMouseX;
    const deltaY = event.clientY - gameState.lastMouseY;
    
    // 處理左右旋轉
    cardMesh.rotation.y += deltaX * 0.01;
    
    // 處理上下摺疊
    const foldDelta = deltaY * 0.003;
    gameState.targetFoldAmount = Math.max(-gameState.maxFoldAmount, 
                                        Math.min(gameState.maxFoldAmount, 
                                               gameState.targetFoldAmount - foldDelta));
    
    gameState.lastMouseX = event.clientX;
    gameState.lastMouseY = event.clientY;
}

// 處理拖曳結束
function handleDragEnd() {
    if (!gameState.isDragging) return;
    
    gameState.isDragging = false;
    
    // 設置目標摺疊值為0，讓卡片漸漸恢復平整
    gameState.targetFoldAmount = 0;
}

// 處理觸控開始
function handleTouchStart(event) {
    if (!cardMesh) return;
    
    gameState.isDragging = true;
    gameState.touchStartX = event.touches[0].clientX;
    gameState.touchStartY = event.touches[0].clientY;
}

// 處理觸控移動
function handleTouchMove(event) {
    if (!gameState.isDragging || !cardMesh) return;
    
    event.preventDefault();
    
    const deltaX = event.touches[0].clientX - gameState.touchStartX;
    const deltaY = event.touches[0].clientY - gameState.touchStartY;
    
    // 處理左右旋轉
    cardMesh.rotation.y += deltaX * 0.01;
    
    // 處理上下摺疊
    const foldDelta = deltaY * 0.003;
    gameState.targetFoldAmount = Math.max(-gameState.maxFoldAmount, 
                                        Math.min(gameState.maxFoldAmount, 
                                               gameState.targetFoldAmount - foldDelta));
    
    gameState.touchStartX = event.touches[0].clientX;
    gameState.touchStartY = event.touches[0].clientY;
}

// 處理觸控結束
function handleTouchEnd() {
    gameState.isDragging = false;
}

// 動畫循環
function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    if (cardMesh) {
        if (!gameState.isDragging) {
            // 只有在不拖曳時才自動旋轉
            cardMesh.rotation.y += 0.01;
        }
        // 每幀更新摺疊效果
        updateCardFold();
    }
    
    // 更新星星
    updateStars();
    
    renderer.render(scene, camera);
}

// 創建星星
function createStar(position) {
    const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xFFFF00,
        transparent: true,
        opacity: 1
    });
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.copy(position);
    star.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
    );
    star.userData.opacity = 1;
    return star;
}

// 更新星星動畫
function updateStars() {
    for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        star.position.add(star.userData.velocity);
        star.userData.opacity -= 0.02;
        star.material.opacity = star.userData.opacity;
        
        if (star.userData.opacity <= 0) {
            scene.remove(star);
            stars.splice(i, 1);
        }
    }
}

// 修改創建卡牌紋理的函數
function createCardTexture(cardData) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 712;
        const ctx = canvas.getContext('2d');
        
        // 填充白色背景
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 512, 712);
        
        const textureLoader = new THREE.TextureLoader();
        const imagePath = `/images/${cardData.imageFile}`;
        
        textureLoader.load(
            imagePath,
            (imageTexture) => {
                // 計算圖片在卡片中的位置和大小
                const cardPadding = 40;  // 卡片邊距
                const imageWidth = canvas.width - (cardPadding * 2);
                const imageHeight = canvas.height - (cardPadding * 2);
                const imageX = cardPadding;
                const imageY = cardPadding;
                
                // 繪製圖片
                ctx.drawImage(imageTexture.image, imageX, imageY, imageWidth, imageHeight);
                
                // 繪製左上角的花色和數字
                ctx.font = 'bold 60px Arial';
                ctx.fillStyle = cardData.color;
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                
                // 左上角數字
                ctx.fillText(cardData.value, 20, 20);
                
                // 左上角花色
                ctx.font = 'bold 60px Arial';
                ctx.fillText(getSuitSymbol(cardData.suit), 20, 80);
                
                // 繪製右下角的花色和數字（旋轉180度）
                ctx.save();
                ctx.translate(canvas.width, canvas.height);
                ctx.rotate(Math.PI);
                
                // 右下角數字
                ctx.fillText(cardData.value, 20, 20);
                
                // 右下角花色
                ctx.fillText(getSuitSymbol(cardData.suit), 20, 80);
                ctx.restore();
                
                // 將 Canvas 轉換為紋理
                const texture = new THREE.CanvasTexture(canvas);
                texture.flipY = true; // 修正圖片方向
                texture.needsUpdate = true;
                resolve(texture);
            },
            undefined,
            (error) => {
                console.error('載入圖片失敗:', error);
                console.error('嘗試載入的圖片路徑:', imagePath);
                
                // 如果圖片載入失敗，使用備用的文字紋理
                // 繪製卡牌內容
                ctx.font = 'bold 80px Arial';
                ctx.fillStyle = cardData.color;
                ctx.textAlign = 'center';
                
                // 繪製數值
                ctx.fillText(cardData.value, canvas.width/2, 120);
                
                // 繪製花色
                ctx.font = 'bold 200px Arial';
                ctx.fillText(getSuitSymbol(cardData.suit), canvas.width/2, canvas.height/2);
                
                // 繪製人物名稱
                ctx.font = 'bold 40px Arial';
                ctx.fillText(cardData.person || '', canvas.width/2, canvas.height - 120);
                
                // 將 Canvas 轉換為紋理
                const fallbackTexture = new THREE.CanvasTexture(canvas);
                fallbackTexture.flipY = true;
                fallbackTexture.needsUpdate = true;
                resolve(fallbackTexture);
            }
        );
    });
}

// 修改創建卡牌3D模型的函數
async function createCardMesh(cardData) {
    // 使用更細緻的平面幾何體以實現摺疊效果
    // 水平和垂直方向都需要足夠的分段
    const geometry = new THREE.PlaneGeometry(3, 4, gameState.foldSegments, gameState.foldSegments);
    
    // 創建材質
    const texture = await createCardTexture(cardData);
    const frontMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffffff,
        map: texture,
        side: THREE.FrontSide,
        shininess: 30
    });
    const backMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x0000aa,
        side: THREE.BackSide,
        shininess: 30
    });
    
    // 創建兩個網格，一個用於正面，一個用於背面
    const frontMesh = new THREE.Mesh(geometry.clone(), frontMaterial);
    const backMesh = new THREE.Mesh(geometry.clone(), backMaterial);
    
    // 創建一個群組來包含兩個網格
    const group = new THREE.Group();
    group.add(frontMesh);
    group.add(backMesh);
    
    // 設置初始位置和旋轉
    group.position.set(0, -10, 0);
    group.rotation.y = Math.PI;
    group.userData = { 
        cardData,
        frontGeometry: frontMesh.geometry,
        backGeometry: backMesh.geometry
    };
    
    return group;
}

// 獲取花色符號
function getSuitSymbol(suit) {
    switch(suit) {
        case 'hearts': return '♥';
        case 'diamonds': return '♦';
        case 'spades': return '♠';
        case 'clubs': return '♣';
        default: return '';
    }
}

// 從 collection.js 導入，保留此函數以供卡牌創建使用

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

// 抽卡動畫
function animateCard(newCardMesh) {
    // 清除之前的卡片
    if (cardMesh) {
        scene.remove(cardMesh);
    }
    
    // 將卡片添加到場景
    scene.add(newCardMesh);
    cardMesh = newCardMesh;
    
    // 設置卡片的初始位置和旋轉
    cardMesh.position.set(0, -10, 0);
    cardMesh.rotation.set(0, Math.PI, 0);
    
    // 動畫時間軸
    let time = 0;
    const duration = 30;
    
    // 卡片飛入動畫
    function flyIn() {
        if (time >= duration) {
            gameState.isDrawing = false;
            drawButton.disabled = false;
            drawButton.textContent = '抽牌';
            
            // 在卡片周圍創建星星
            for (let i = 0; i < 20; i++) {
                const star = createStar(new THREE.Vector3(
                    cardMesh.position.x + (Math.random() - 0.5) * 2,
                    cardMesh.position.y + (Math.random() - 0.5) * 2,
                    cardMesh.position.z + (Math.random() - 0.5) * 2
                ));
                scene.add(star);
                stars.push(star);
            }
            return;
        }
        
        time++;
        
        // 使用 easeOutBack 效果
        const progress = time / duration;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const easeOutBack = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        cardMesh.position.y = -10 + (10 * easeOutBack);
        cardMesh.rotation.y = Math.PI - (Math.PI * easeOut);
        
        requestAnimationFrame(flyIn);
    }
    
    flyIn();
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



// 更新卡片摺疊效果
function updateCardFold() {
    if (!cardMesh) return;
    
    const frontGeometry = cardMesh.userData.frontGeometry;
    const backGeometry = cardMesh.userData.backGeometry;
    
    // 平滑過渡到目標摺疊值
    const foldDiff = gameState.targetFoldAmount - gameState.foldAmount;
    if (Math.abs(foldDiff) > 0.001) {
        gameState.foldAmount += foldDiff * gameState.foldAnimationSpeed;
    } else {
        gameState.foldAmount = gameState.targetFoldAmount;
    }
    
    const foldAmount = gameState.foldAmount;
    
    // 更新幾何體頂點
    const frontVertices = frontGeometry.attributes.position.array;
    const backVertices = backGeometry.attributes.position.array;
    const segments = gameState.foldSegments;
    
    // 計算每個摺疊段的大小
    const segmentHeight = 4 / segments;
    const segmentWidth = 3 / segments;
    
    // 遍歷所有頂點
    for (let i = 0; i <= segments; i++) {
        for (let j = 0; j <= segments; j++) {
            // 計算當前點的網格索引
            const index = (i * (segments + 1) + j) * 3;
            
            // 計算正規化座標（範圍從-1到1）
            const normalizedY = 1 - (i / segments) * 2;
            const normalizedX = (j / segments) * 2 - 1;
            
            // 計算摺疊角度（交替正負，並考慮水平位置）
            const verticalFold = foldAmount * (i % 2 === 0 ? 1 : -1);
            const horizontalFold = foldAmount * 0.5 * (j % 2 === 0 ? 1 : -1);
            
            // 計算Z軸偏移（結合垂直和水平摺疊）
            const zOffset = (Math.sin(verticalFold) * segmentHeight * 0.5) +
                          (Math.sin(horizontalFold) * segmentWidth * 0.3);
            
            // 計算壓縮效果（結合垂直和水平壓縮）
            const yCompress = (1 - Math.cos(verticalFold)) * segmentHeight * 0.5;
            const xCompress = (1 - Math.cos(horizontalFold)) * segmentWidth * 0.3;
            
            // 更新頂點位置
            const originalX = frontVertices[index];
            const originalY = frontVertices[index + 1];
            
            // 應用壓縮效果
            const compressedX = originalX - (Math.sign(originalX) * xCompress);
            const compressedY = originalY - (Math.sign(originalY) * yCompress);
            
            // 更新前後兩面的頂點
            frontVertices[index] = compressedX;
            frontVertices[index + 1] = compressedY;
            frontVertices[index + 2] = zOffset;
            
            backVertices[index] = compressedX;
            backVertices[index + 1] = compressedY;
            backVertices[index + 2] = zOffset;
        }
    }
    
    // 標記幾何體需要更新
    frontGeometry.attributes.position.needsUpdate = true;
    backGeometry.attributes.position.needsUpdate = true;
    
    // 更新法向量以確保光照正確
    frontGeometry.computeVertexNormals();
    backGeometry.computeVertexNormals();
}

// 啟動遊戲
document.addEventListener('DOMContentLoaded', init);