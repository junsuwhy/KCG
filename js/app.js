// 卡牌遊戲主要邏輯

// 卡牌種類
const cardTypes = [
    { id: 1, name: "紅心A", color: "red", suit: "hearts", value: "A" },
    { id: 2, name: "紅心2", color: "red", suit: "hearts", value: "2" },
    { id: 3, name: "紅心3", color: "red", suit: "hearts", value: "3" },
    { id: 4, name: "方塊A", color: "red", suit: "diamonds", value: "A" },
    { id: 5, name: "方塊2", color: "red", suit: "diamonds", value: "2" },
    { id: 6, name: "方塊3", color: "red", suit: "diamonds", value: "3" },
    { id: 7, name: "黑桃A", color: "black", suit: "spades", value: "A" },
    { id: 8, name: "黑桃2", color: "black", suit: "spades", value: "2" },
    { id: 9, name: "黑桃3", color: "black", suit: "spades", value: "3" },
    { id: 10, name: "梅花A", color: "black", suit: "clubs", value: "A" },
    { id: 11, name: "梅花2", color: "black", suit: "clubs", value: "2" },
    { id: 12, name: "梅花3", color: "black", suit: "clubs", value: "3" },
];

// 遊戲狀態
const gameState = {
    cards: [],          // 收集的卡牌
    isDrawing: false,   // 是否正在抽卡
    currentCard: null,  // 當前抽到的卡牌
    showCollection: false // 是否顯示集卡書
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

// 初始化函數
function init() {
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
    collectionButton.textContent = '集卡書 (0)';
    collectionButton.addEventListener('click', toggleCollection);
    buttonsContainer.appendChild(collectionButton);
    
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
    scene.background = new THREE.Color(0x2d572c);
    
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
}

// 動畫循環
function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    if (cardMesh) {
        // 卡片旋轉動畫
        cardMesh.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
}

// 創建卡牌3D模型
function createCardMesh(cardData) {
    const cardGeometry = new THREE.BoxGeometry(3, 4, 0.1);
    
    // 創建材質
    const textureLoader = new THREE.TextureLoader();
    
    // 創建卡牌材質
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0x888888 }), // 右側
        new THREE.MeshBasicMaterial({ color: 0x888888 }), // 左側
        new THREE.MeshBasicMaterial({ color: 0x888888 }), // 上側
        new THREE.MeshBasicMaterial({ color: 0x888888 }), // 下側
        new THREE.MeshBasicMaterial({ color: 0xdddddd, map: createCardTexture(cardData) }), // 正面
        new THREE.MeshBasicMaterial({ color: 0x0000aa }) // 背面 (藍色背景)
    ];
    
    const mesh = new THREE.Mesh(cardGeometry, materials);
    
    // 設置初始位置在畫面外
    mesh.position.set(0, -10, 0);
    mesh.userData = { cardData };
    
    return mesh;
}

// 創建卡牌的紋理
function createCardTexture(cardData) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 712;
    const ctx = canvas.getContext('2d');
    
    // 填充白色背景
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 512, 712);
    
    // 繪製卡牌內容
    ctx.font = 'bold 80px Arial';
    ctx.fillStyle = cardData.color;
    
    // 左上和右下繪製數值
    ctx.fillText(cardData.value, 30, 80);
    ctx.save();
    ctx.translate(512, 712);
    ctx.rotate(Math.PI);
    ctx.fillText(cardData.value, 30, 80);
    ctx.restore();
    
    // 繪製花色
    ctx.font = 'bold 200px Arial';
    ctx.fillText(getSuitSymbol(cardData.suit), 150, 380);
    
    // 將Canvas轉換為紋理
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    return texture;
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

// 抽卡功能
function drawCard() {
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
    
    // 更新 UI
    updateCurrentCardDisplay(newCard);
    updateCollectionButton();
    
    // 保存卡片到本地存儲
    saveCardsToStorage();
    
    // 創建並動畫顯示新卡片
    const newCardMesh = createCardMesh(newCard);
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
    const duration = 60; // 動畫幀數
    
    // 卡片飛入動畫
    function flyIn() {
        if (time >= duration) {
            gameState.isDrawing = false;
            drawButton.disabled = false;
            drawButton.textContent = '抽牌';
            return;
        }
        
        time++;
        
        // 修改卡片位置和旋轉
        cardMesh.position.y = -10 + (10 * Math.sin((time / duration) * Math.PI / 2));
        cardMesh.rotation.y = Math.PI - (Math.PI * time / duration);
        
        // 繼續動畫
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
    collectionButton.textContent = `集卡書 (${gameState.cards.length})`;
}

// 切換集卡書顯示
function toggleCollection() {
    gameState.showCollection = !gameState.showCollection;
    
    if (gameState.showCollection) {
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
        updateCollectionButton();
    }
}

// 保存卡牌到本地存儲
function saveCardsToStorage() {
    localStorage.setItem('kmtPokerCards', JSON.stringify(gameState.cards));
}

// 啟動遊戲
document.addEventListener('DOMContentLoaded', init);