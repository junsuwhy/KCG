// 集卡書系統
// 負責集卡書的顯示、管理和本地存儲

// 提供的介面
export {
    setupCollectionSystem,
    toggleCollection,
    updateCollectionButton,
    updateCollectionModal,
    saveCardsToStorage,
    loadCardsFromStorage
};

// DOM 元素參考
let collectionButton;
let collectionModal;
let mountElement;

// 遊戲狀態對象，由主程式提供
let gameState;

// 設定集卡書系統
function setupCollectionSystem(mountEl, gameStateRef) {
    mountElement = mountEl;
    gameState = gameStateRef;
    
    // 創建集卡書按鈕
    createCollectionButton();
    
    // 創建集卡書彈窗
    createCollectionModal();
    
    // 載入本地存儲的卡牌
    loadCardsFromStorage();
}

// 創建集卡書按鈕
function createCollectionButton() {
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
    mountElement.appendChild(collectionButton);
}

// 創建集卡書彈窗
function createCollectionModal() {
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
        
        // 獲取上次訪問時間
        const lastVisitTime = localStorage.getItem('lastVisitTime') || 0;
        
        // 重建卡片種類集合
        const oldCardTypes = new Set();
        const newCardTypes = new Set();
        
        // 遍歷所有卡片，分別記錄舊卡片和新卡片的種類
        gameState.cards.forEach(card => {
            if (card.id <= lastVisitTime) {
                oldCardTypes.add(card.name);
            } else {
                newCardTypes.add(card.name);
            }
        });
        
        // 合併所有卡片種類
        gameState.uniqueCardTypes = new Set([...oldCardTypes, ...newCardTypes]);
        
        // 計算新種類的卡片數量（只計算在上次訪問後出現的新種類）
        gameState.newCardsCount = Array.from(newCardTypes).filter(cardName => !oldCardTypes.has(cardName)).length;
        
        updateCollectionButton();
    }
}

// 保存卡牌到本地存儲
function saveCardsToStorage(stateObj = null) {
    // 如果提供了外部 gameState，則使用它；否則使用全局 gameState
    const state = stateObj || gameState;
    localStorage.setItem('kmtPokerCards', JSON.stringify(state.cards));
    localStorage.setItem('lastVisitTime', Date.now());
}
