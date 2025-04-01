import * as THREE from '../node_modules/three/build/three.module.js';

// 卡牌遊戲主要邏輯

// 卡牌種類
let cardTypes = [];

// 從 CSV 讀取卡牌資料
async function loadCardsFromCSV() {
    try {
        const response = await fetch('/KMTPoker.csv');
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
    touchStartX: 0      // 觸控開始的 X 座標
};

// DOM 元素參考
let mountElement;
let uiContainer;
let currentCardDisplay;
let drawButton;
let collectionButton;
let collectionModal;

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
    
    // 載入本地存儲的卡牌
    loadCardsFromStorage();
    
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
    
    // 集卡書按鈕
    collectionButton = document.createElement('button');
    collectionButton.className = 'collection-button';
    collectionButton.setAttribute('title', '集卡書');
    
    // 使用 fetch 載入 SVG
    fetch('images/book.svg')
        .then(response => response.text())
        .then(svgContent => {
            collectionButton.innerHTML = svgContent;
            // 初始化按鈕上的數字
            updateCollectionButton();
        })
        .catch(error => {
            console.error('載入 SVG 失敗:', error);
            // 如果載入失敗，使用備用圖示
            collectionButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 1l-5 5v11l5-4.5V1zM1 4v14c0 1.1.9 2 2 2h11V4H1zm14-3v2h3v3h2V1h-5z"/>
                </svg>
            `;
            // 初始化按鈕上的數字
            updateCollectionButton();
        });
    
    collectionButton.addEventListener('click', toggleCollection);
    mountElement.appendChild(collectionButton);  // 改為直接加到 mountElement
    
    // 集卡書彈窗
    collectionModal = document.createElement('div');
    collectionModal.className = 'collection-modal';
    collectionModal.style.display = 'none';
    
    const collectionTitle = document.createElement('h2');
    collectionTitle.className = 'collection-title';
    collectionTitle.textContent = '集卡書';
    collectionModal.appendChild(collectionTitle);
    
    const collectionGrid = document.createElement('div');
    collectionGrid.className = 'collection-grid';
    collectionModal.appendChild(collectionGrid);
    
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.textContent = '返回遊戲';
    backButton.addEventListener('click', toggleCollection);
    collectionModal.appendChild(backButton);
    
    mountElement.appendChild(collectionModal);
}

// 初始化 Three.js
function initThreeJS() {
    // 創建場景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f5ff);  // 改為淡藍色
    
    // 創建相機
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // 創建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountElement.insertBefore(renderer.domElement, mountElement.firstChild);
    
    // 添加燈光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
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
}

// 處理拖曳移動
function handleDragMove(event) {
    if (!gameState.isDragging || !cardMesh) return;
    
    const deltaX = event.clientX - gameState.lastMouseX;
    cardMesh.rotation.y += deltaX * 0.01;
    gameState.lastMouseX = event.clientX;
}

// 處理拖曳結束
function handleDragEnd() {
    gameState.isDragging = false;
}

// 處理觸控開始
function handleTouchStart(event) {
    if (!cardMesh) return;
    
    gameState.isDragging = true;
    gameState.touchStartX = event.touches[0].clientX;
}

// 處理觸控移動
function handleTouchMove(event) {
    if (!gameState.isDragging || !cardMesh) return;
    
    event.preventDefault(); // 防止頁面滾動
    const deltaX = event.touches[0].clientX - gameState.touchStartX;
    cardMesh.rotation.y += deltaX * 0.01;
    gameState.touchStartX = event.touches[0].clientX;
}

// 處理觸控結束
function handleTouchEnd() {
    gameState.isDragging = false;
}

// 動畫循環
function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    if (cardMesh && !gameState.isDragging) {
        // 只有在不拖曳時才自動旋轉
        cardMesh.rotation.y += 0.01;
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
    // 使用平面幾何體作為卡片
    const geometry = new THREE.PlaneGeometry(3, 4);
    
    // 創建材質
    const texture = await createCardTexture(cardData);
    const frontMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        map: texture,
        side: THREE.FrontSide
    });
    const backMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x0000aa,
        side: THREE.BackSide
    });
    
    // 創建兩個網格，一個用於正面，一個用於背面
    const frontMesh = new THREE.Mesh(geometry, frontMaterial);
    const backMesh = new THREE.Mesh(geometry, backMaterial);
    
    // 創建一個群組來包含兩個網格
    const group = new THREE.Group();
    group.add(frontMesh);
    group.add(backMesh);
    
    // 設置初始位置和旋轉
    group.position.set(0, -10, 0);
    group.rotation.y = Math.PI;
    group.userData = { cardData };
    
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
    
    // 更新卡片種類集合
    gameState.uniqueCardTypes.add(newCard.name);
    
    // 增加新卡片計數
    gameState.newCardsCount++;
    
    // 更新 UI
    updateCurrentCardDisplay(newCard);
    updateCollectionButton();
    
    // 保存卡片到本地存儲
    saveCardsToStorage();
    
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

// 更新集卡書按鈕
function updateCollectionButton() {
    const uniqueCount = gameState.uniqueCardTypes.size;
    const originalSvg = collectionButton.querySelector('svg');
    
    if (originalSvg) {
        // 保留原始的 SVG，只更新數字指示器
        collectionButton.innerHTML = originalSvg.outerHTML;
    } else {
        // 如果沒有原始 SVG，使用備用圖示
        collectionButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 1l-5 5v11l5-4.5V1zM1 4v14c0 1.1.9 2 2 2h11V4H1zm14-3v2h3v3h2V1h-5z"/>
            </svg>
        `;
    }
    
    // 添加數字指示器
    if (gameState.newCardsCount > 0) {
        const newCardsIndicator = document.createElement('div');
        newCardsIndicator.className = 'new-cards-count';
        newCardsIndicator.textContent = gameState.newCardsCount;
        collectionButton.appendChild(newCardsIndicator);
    }
    
    const totalCardsIndicator = document.createElement('div');
    totalCardsIndicator.className = 'total-cards-count';
    totalCardsIndicator.textContent = uniqueCount;
    collectionButton.appendChild(totalCardsIndicator);
}

// 切換集卡書顯示
function toggleCollection() {
    gameState.showCollection = !gameState.showCollection;
    
    if (gameState.showCollection) {
        // 清空新卡片計數
        gameState.newCardsCount = 0;
        // 更新最後訪問時間
        localStorage.setItem('lastVisitTime', Date.now());
        updateCollectionButton();
        updateCollectionModal();
        collectionModal.style.display = 'flex';
    } else {
        collectionModal.style.display = 'none';
    }
}

// 更新集卡書內容
function updateCollectionModal() {
    const collectionGrid = collectionModal.querySelector('.collection-grid');
    collectionGrid.innerHTML = '';
    
    if (gameState.cards.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.style.gridColumn = '1 / -1';
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.color = 'white';
        emptyMessage.style.fontSize = '1.25rem';
        emptyMessage.textContent = '尚未收集到任何卡片';
        collectionGrid.appendChild(emptyMessage);
        return;
    }
    
    // 添加所有卡片
    gameState.cards.forEach(card => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';
        
        const cardSymbol = document.createElement('div');
        cardSymbol.className = `card-symbol ${card.color === 'red' ? 'symbol-red' : ''}`;
        cardSymbol.textContent = `${getSuitSymbol(card.suit)} ${card.value}`;
        cardItem.appendChild(cardSymbol);
        
        const cardName = document.createElement('div');
        cardName.className = 'card-name';
        cardName.textContent = card.name;
        cardItem.appendChild(cardName);
        
        collectionGrid.appendChild(cardItem);
    });
}

// 從本地存儲加載卡牌
function loadCardsFromStorage() {
    const savedCards = localStorage.getItem('kmtPokerCards');
    if (savedCards) {
        gameState.cards = JSON.parse(savedCards);
        // 重建卡片種類集合
        gameState.uniqueCardTypes = new Set(gameState.cards.map(card => card.name));
        // 設置新卡片數量為未讀卡片數量
        const lastVisitTime = localStorage.getItem('lastVisitTime') || 0;
        gameState.newCardsCount = gameState.cards.filter(card => card.id > lastVisitTime).length;
        updateCollectionButton();
    }
}

// 保存卡牌到本地存儲
function saveCardsToStorage() {
    localStorage.setItem('kmtPokerCards', JSON.stringify(gameState.cards));
    localStorage.setItem('lastVisitTime', Date.now());
}

// 啟動遊戲
document.addEventListener('DOMContentLoaded', init);