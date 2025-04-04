// 集卡書系統
// 負責集卡書的顯示、管理和本地存儲

// 導入卡牌類型數據和函數
import * as appModule from './app.js';

// 提供的介面
export {
    setupCollectionSystem,
    toggleCollection,
    updateCollectionButton,
    updateCollectionModal,
    saveCardsToStorage,
    loadCardsFromStorage,
    showCardDetail,
    backToCollection
};

// DOM 元素參考
let collectionButton;
let collectionModal;
let mountElement;
let cardDetailView;  // 詳情視圖，已移除

// 游戲狀態對象
// 組件引用
let gameState;
let drawButton;
let currentCardDisplay;
let uiContainer;

// 關聯到 app.js 的函數參考
let createCardMeshFn;  // 創建卡片模型的函數
let animateCardFn;    // 動畫顯示卡片的函數

// 設定集卡書系統
function setupCollectionSystem(mountEl, gameStateRef, createCardMesh, animateCard, drawBtnRef, currentCardDisplayRef, uiContainerRef) {
    mountElement = mountEl;
    gameState = gameStateRef;
    createCardMeshFn = createCardMesh;  // 保存創建卡片模型的函數引用
    animateCardFn = animateCard;        // 保存動畫顯示卡片的函數引用
    drawButton = drawBtnRef;  // 抽牌按鈕引用
    currentCardDisplay = currentCardDisplayRef;  // 當前卡片顯示引用
    uiContainer = uiContainerRef;  // UI容器引用
    
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
    fetch('./images/book.svg')
        .then(response => response.text())
        .then(svgContent => {
            // 移除任何可能導致問題的 DOCTYPE 或註釋
            const cleanedSvgContent = svgContent.replace(/<!DOCTYPE[^>]*>|<!--[\s\S]*?-->/g, '');
            // 確保只有一個 SVG 標籤
            const svgMatch = cleanedSvgContent.match(/<svg[\s\S]*?\/svg>/g);
            if (svgMatch && svgMatch.length > 0) {
                collectionButton.innerHTML = svgMatch[0]; // 只使用第一個匹配到的 SVG
            } else {
                collectionButton.innerHTML = cleanedSvgContent;
            }
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
    
    // 集卡書頂部信息區域
    const collectionInfo = document.createElement('div');
    collectionInfo.className = 'collection-info';
    
    const collectionTitle = document.createElement('h2');
    collectionTitle.className = 'collection-title';
    collectionTitle.textContent = '集卡書';
    collectionInfo.appendChild(collectionTitle);
    
    // 收集統計信息
    const collectionStats = document.createElement('div');
    collectionStats.className = 'collection-stats';
    collectionInfo.appendChild(collectionStats);
    
    collectionModal.appendChild(collectionInfo);
    
    // 卡片網格
    const collectionGrid = document.createElement('div');
    collectionGrid.className = 'collection-grid';
    collectionModal.appendChild(collectionGrid);
    
    // 返回按鈕
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
        
        // 如果正在顯示卡片詳情，重設為抽牌模式
        if (gameState.viewingCardDetail) {
            backToCollection();
        }
    } else {
        collectionModal.style.display = 'none';
        
        // 離開集卡書時清空畫面
        if (appModule.clearCurrentCard) {
            appModule.clearCurrentCard();
        }
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

// 顯示卡片詳情
function showCardDetail(card) {
    // 設置狀態為正在查看卡片詳情
    gameState.viewingCardDetail = true;
    gameState.showCollection = false;
    
    // 隱藏集卡書
    collectionModal.style.display = 'none';
    
    // 計算這張卡的數量
    const cardCount = gameState.cards.filter(c => c.name === card.name).length;
    card.count = cardCount;
    
    // 使用 app.js 的 updateCurrentCardDisplay 函數來顯示卡片
    appModule.updateCurrentCardDisplay(card);
    
    // 將抽牌按鈕變成返回集卡書按鈕
    drawButton.textContent = '返回集卡書';
    drawButton.style.backgroundColor = '#dc2626'; // 紅色背景
    drawButton.style.color = 'white';
    
    // 保存原始目標事件
    drawButton.originalClickEvent = drawButton.onclick;
    
    // 更改按鈕功能
    drawButton.onclick = backToCollection;
    
    // 創建並動畫顯示新卡片
    createCardMeshFn(card).then(cardMesh => {
        // 保存當前卡片以供後續清除
        gameState.currentCard = card;
        
        // 動畫顯示卡片
        animateCardFn(cardMesh);
    });
}

// 返回集卡書
function backToCollection() {
    // 重設狀態
    gameState.viewingCardDetail = false;
    
    // 隱藏卡片資訊
    currentCardDisplay.style.display = 'none';
    
    // 將返回集卡書按鈕變回抽牌按鈕
    drawButton.textContent = '抽牌';
    drawButton.style.backgroundColor = ''; // 恢復預設背景色
    drawButton.style.color = 'rgba(0, 0, 0, 0.8)';
    
    // 更改按鈕功能
    drawButton.onclick = drawButton.originalClickEvent;
    
    // 顯示集卡書
    gameState.showCollection = true;
    collectionModal.style.display = 'flex';
    
    // 更新集卡書
    updateCollectionModal();
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

// 隱藏卡片詳情
function hideCardDetail() {
    // 與 backToCollection 功能相同
    backToCollection();
}

// 更新集卡書內容
function updateCollectionModal() {
    const collectionGrid = collectionModal.querySelector('.collection-grid');
    const collectionStats = collectionModal.querySelector('.collection-stats');
    collectionGrid.innerHTML = '';
    
    // 使用 cardTypes 從 app.js 獲取所有卡牌種類
    const allCardTypes = appModule.getCardTypes ? appModule.getCardTypes() : [];
    
    // 如果無法獲取 cardTypes，則顯示錯誤信息
    if (allCardTypes.length === 0) {
        const errorMessage = document.createElement('div');
        errorMessage.style.gridColumn = '1 / -1';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.color = 'white';
        errorMessage.style.fontSize = '1.25rem';
        errorMessage.textContent = '卡片加載失敗，請重新整理頁面';
        collectionGrid.appendChild(errorMessage);
        return;
    }
    
    // 創建已收集卡片的映射，以便快速查找，並計算每種卡片的數量
    const collectedCards = {};
    gameState.cards.forEach(card => {
        if (!collectedCards[card.name]) {
            collectedCards[card.name] = {
                ...card,
                count: 1
            };
        } else {
            collectedCards[card.name].count++;
        }
    });
    
    // 計算收集統計信息
    const totalCards = allCardTypes.length;
    const collectedCount = Object.keys(collectedCards).length;
    const completionPercentage = Math.round((collectedCount / totalCards) * 100);
    
    // 更新統計信息
    collectionStats.textContent = `已收集: ${collectedCount}/${totalCards} (${completionPercentage}%)`;
    
    // 按CSV順序顯示所有卡片（有序號從1開始）
    allCardTypes.forEach((cardType, index) => {
        const cardNumber = index + 1; // CSV編號從1開始
        const isCollected = collectedCards[cardType.name] !== undefined;
        
        const cardItem = document.createElement('div');
        cardItem.className = isCollected ? 'card-item' : 'card-item empty';
        
        // 顯示卡片編號
        const cardNumberEl = document.createElement('div');
        cardNumberEl.className = 'card-number';
        cardNumberEl.textContent = `${cardNumber}`;
        cardItem.appendChild(cardNumberEl);
        
        if (isCollected) {
            const card = collectedCards[cardType.name];
            
            // 創建卡片內容容器
            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';
            cardContent.style.width = '100%';
            cardContent.style.height = '100%';
            cardContent.style.position = 'relative';
            cardContent.style.display = 'flex';
            cardContent.style.flexDirection = 'column';
            cardContent.style.justifyContent = 'center';
            cardContent.style.alignItems = 'center';

            // 添加卡片數量標記
            const countBadge = document.createElement('div');
            countBadge.className = 'card-count-badge';
            countBadge.textContent = `×${card.count}`;
            cardContent.appendChild(countBadge);

            cardItem.appendChild(cardContent);
            
            // 左上角花色和數字
            const topLeftSymbol = document.createElement('div');
            topLeftSymbol.className = `card-symbol ${card.color === 'red' ? 'symbol-red' : ''}`;
            topLeftSymbol.style.position = 'absolute';
            topLeftSymbol.style.top = '0.1rem';
            topLeftSymbol.style.left = '0.1rem';
            topLeftSymbol.style.fontSize = '1rem';
            topLeftSymbol.style.fontWeight = 'bold';
            topLeftSymbol.style.lineHeight = '0.9';
            topLeftSymbol.innerHTML = `${card.value}<br>${getSuitSymbol(card.suit)}`;
            cardContent.appendChild(topLeftSymbol);
            
            // 右下角花色和數字（旋轉18र度）
            const bottomRightSymbol = document.createElement('div');
            bottomRightSymbol.className = `card-symbol ${card.color === 'red' ? 'symbol-red' : ''}`;
            bottomRightSymbol.style.position = 'absolute';
            bottomRightSymbol.style.bottom = '0.1rem';
            bottomRightSymbol.style.right = '0.1rem';
            bottomRightSymbol.style.fontSize = '1rem';
            bottomRightSymbol.style.fontWeight = 'bold';
            bottomRightSymbol.style.lineHeight = '0.9';
            bottomRightSymbol.style.transform = 'rotate(180deg)';
            bottomRightSymbol.innerHTML = `${card.value}<br>${getSuitSymbol(card.suit)}`;
            cardContent.appendChild(bottomRightSymbol);
            
            // 顯示卡片圖片（如果有）
            try {
                const cardImage = document.createElement('img');
                cardImage.className = 'card-image';
                cardImage.src = `./images/${card.imageFile}`;
                cardImage.alt = card.name;
                cardImage.style.margin = '0 auto'; // 居中
                cardImage.style.display = 'block';
                cardImage.style.width = '100%'; // 使圖片填展卡片
                cardImage.style.maxWidth = '100px'; // 限制最大寬度
                cardImage.style.height = 'auto';
                cardImage.style.aspectRatio = '1/1';
                cardImage.style.objectFit = 'cover';
                cardImage.onerror = () => {
                    // 如果圖片載入失敗，顯示大花色符號和名稱
                    cardImage.style.display = 'none';
                    
                    // 大花色符號
                    const centerSymbol = document.createElement('div');
                    centerSymbol.className = `card-symbol ${card.color === 'red' ? 'symbol-red' : ''}`;
                    centerSymbol.style.fontSize = '5rem';
                    centerSymbol.style.textAlign = 'center';
                    centerSymbol.style.width = '100%';
                    centerSymbol.style.marginBottom = '0.5rem';
                    centerSymbol.textContent = getSuitSymbol(card.suit);
                    cardContent.appendChild(centerSymbol);
                    
                    // 顯示人物名稱
                    const personName = document.createElement('div');
                    personName.style.textAlign = 'center';
                    personName.style.width = '100%';
                    personName.style.fontSize = '0.9rem';
                    personName.style.padding = '0 0.5rem';
                    personName.style.whiteSpace = 'nowrap';
                    personName.style.overflow = 'hidden';
                    personName.style.textOverflow = 'ellipsis';
                    personName.textContent = card.person || card.name;
                    cardContent.appendChild(personName);
                };
                cardContent.appendChild(cardImage);
            } catch (e) {
                // 如果圖片載入失敗，顯示大花色符號和名稱
                // 大花色符號
                const centerSymbol = document.createElement('div');
                centerSymbol.className = `card-symbol ${card.color === 'red' ? 'symbol-red' : ''}`;
                centerSymbol.style.fontSize = '5rem';
                centerSymbol.style.textAlign = 'center';
                centerSymbol.style.width = '100%';
                centerSymbol.style.marginBottom = '0.5rem';
                centerSymbol.textContent = getSuitSymbol(card.suit);
                cardContent.appendChild(centerSymbol);
                
                // 顯示人物名稱
                const personName = document.createElement('div');
                personName.style.textAlign = 'center';
                personName.style.width = '100%';
                personName.style.fontSize = '0.9rem';
                personName.style.padding = '0 0.5rem';
                personName.style.whiteSpace = 'nowrap';
                personName.style.overflow = 'hidden';
                personName.style.textOverflow = 'ellipsis';
                personName.textContent = card.person || card.name;
                cardContent.appendChild(personName);
            }
            
            // 為已收集的卡片添加點擊事件
            cardItem.style.cursor = 'pointer';
            cardItem.addEventListener('click', () => {
                showCardDetail(card);
            });
        } else {
            // 未收集的卡片
            const placeholderContainer = document.createElement('div');
            placeholderContainer.style.display = 'flex';
            placeholderContainer.style.flexDirection = 'column';
            placeholderContainer.style.alignItems = 'center';
            placeholderContainer.style.justifyContent = 'center';
            placeholderContainer.style.height = '100%';
            placeholderContainer.style.width = '100%';
            placeholderContainer.style.padding = '0.5rem';
            
            // 問號圖示
            const questionMark = document.createElement('div');
            questionMark.style.fontSize = '3.5rem';
            questionMark.style.color = 'rgba(255, 255, 255, 0.15)';
            questionMark.style.marginBottom = '0.5rem';
            questionMark.style.fontWeight = 'bold';
            questionMark.style.fontFamily = '"Arial", sans-serif';
            questionMark.textContent = '?';
            placeholderContainer.appendChild(questionMark);
            
            // 未收集文字
            const placeholderText = document.createElement('div');
            placeholderText.textContent = '未收集';
            placeholderText.style.fontSize = '0.7rem';
            placeholderText.style.marginTop = '0.3rem';
            placeholderText.style.color = 'rgba(255, 255, 255, 0.4)';

            placeholderContainer.appendChild(placeholderText);
            
            cardItem.appendChild(placeholderContainer);
        }
        
        collectionGrid.appendChild(cardItem);
    });
    
    // 如果沒有卡片類型但還是沒有任何收集卡片的情況
    if (gameState.cards.length === 0 && allCardTypes.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.style.gridColumn = '1 / -1';
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.color = 'white';
        emptyMessage.style.fontSize = '1.25rem';
        emptyMessage.textContent = '尚未收集到任何卡片';
        collectionGrid.appendChild(emptyMessage);
    }
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
