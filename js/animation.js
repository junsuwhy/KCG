import * as THREE from 'three';

// Three.js 相關狀態
let scene, camera, renderer;
// 將場景暴露為全局變數，供集卡書系統訪問
window.scene = null;
let cardMesh;
let animationFrameId;
let stars = [];  // 用於存儲星星
let mountElement;

// 遊戲狀態參考（從外部傳入）
let gameState;

// 初始化 Three.js
export function initThreeJS(rootElement, state) {
    // 保存參考
    mountElement = rootElement;
    gameState = state;
    
    // 創建場景
    scene = new THREE.Scene();
    window.scene = scene; // 設置全局場景變數
    scene.background = new THREE.Color(0xf0f5ff);
    
    // 創建相機
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 4; // 向上調整相機位置，以便更好地查看卡片

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
    
    // 添加事件監聽器
    addEventListeners();
    
    // 啟動動畫循環
    animate();
    
    // 返回渲染器對象，以便可能的外部操作
    return renderer;
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
    gameState.lastDragTime = Date.now();
    
    // 開始新的拖曳時重置旋轉速度
    gameState.rotationVelocity = 0;
}

// 處理拖曳移動
function handleDragMove(event) {
    if (!gameState.isDragging || !cardMesh) return;
    
    const currentTime = Date.now();
    gameState.dragInterval = currentTime - gameState.lastDragTime;
    
    const deltaX = event.clientX - gameState.lastMouseX;
    const deltaY = event.clientY - gameState.lastMouseY;
    
    // 處理左右旋轉
    cardMesh.rotation.y += deltaX * 0.01;
    
    // 計算旋轉速度（考慮時間間隔）
    if (gameState.dragInterval > 0) {
        // 使用平滑加權來計算速度，避免突然的變化
        const newVelocity = deltaX * 0.01 / (gameState.dragInterval / 16.67); // 標準化為每幀的速度
        gameState.rotationVelocity = gameState.rotationVelocity * 0.7 + newVelocity * 0.3;
    }
    
    // 處理上下摺疊
    const foldDelta = deltaY * 0.003;
    gameState.targetFoldAmount = Math.max(-gameState.maxFoldAmount, 
                                        Math.min(gameState.maxFoldAmount, 
                                               gameState.targetFoldAmount - foldDelta));
    
    gameState.lastMouseX = event.clientX;
    gameState.lastMouseY = event.clientY;
    gameState.lastDragTime = currentTime;
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
    gameState.lastMouseX = event.touches[0].clientX;
    gameState.lastMouseY = event.touches[0].clientY;
    gameState.lastDragTime = Date.now();
    
    // 開始新的觸控時重置旋轉速度
    gameState.rotationVelocity = 0;
}

// 處理觸控移動
function handleTouchMove(event) {
    if (!gameState.isDragging || !cardMesh) return;
    
    event.preventDefault();
    
    const currentTime = Date.now();
    gameState.dragInterval = currentTime - gameState.lastDragTime;
    
    const deltaX = event.touches[0].clientX - gameState.lastMouseX;
    const deltaY = event.touches[0].clientY - gameState.lastMouseY;
    
    // 處理左右旋轉
    cardMesh.rotation.y += deltaX * 0.01;
    
    // 計算旋轉速度（考慮時間間隔）
    if (gameState.dragInterval > 0) {
        // 使用平滑加權來計算速度，避免突然的變化
        const newVelocity = deltaX * 0.01 / (gameState.dragInterval / 16.67); // 標準化為每幀的速度
        gameState.rotationVelocity = gameState.rotationVelocity * 0.7 + newVelocity * 0.3;
    }
    
    // 處理上下摺疊
    const foldDelta = deltaY * 0.003;
    gameState.targetFoldAmount = Math.max(-gameState.maxFoldAmount, 
                                        Math.min(gameState.maxFoldAmount, 
                                               gameState.targetFoldAmount - foldDelta));
    
    gameState.lastMouseX = event.touches[0].clientX;
    gameState.lastMouseY = event.touches[0].clientY;
    gameState.lastDragTime = currentTime;
}

// 處理觸控結束
function handleTouchEnd() {
    handleDragEnd();
}

// 動畫循環
function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    if (cardMesh) {
        if (!gameState.isDragging) {
            // 應用慣性旋轉：如果不在拖曳中，根據當前旋轉速度繼續旋轉
            if (Math.abs(gameState.rotationVelocity) > gameState.velocityThreshold) {
                // 應用旋轉
                cardMesh.rotation.y += gameState.rotationVelocity;
                
                // 應用摩擦力減緩旋轉速度
                gameState.rotationVelocity *= gameState.frictionFactor;
                
                // 如果速度非常小，則將其設為0
                if (Math.abs(gameState.rotationVelocity) < gameState.velocityThreshold) {
                    gameState.rotationVelocity = 0;
                }
            }
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

// 創建卡牌紋理
export function createCardTexture(cardData) {
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

// 創建卡牌3D模型
export async function createCardMesh(cardData) {
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

// 抽卡動畫
export function animateCard(newCardMesh) {
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
            
            // 更新UI（透過回調通知外部）
            if (typeof gameState.onAnimationComplete === 'function') {
                gameState.onAnimationComplete();
            } else {
                // 如果回調不存在，直接重置按鈕狀態
                const drawButton = document.querySelector('.draw-button');
                if (drawButton) {
                    drawButton.disabled = false;
                    if (!gameState.viewingCardDetail) {
                        drawButton.textContent = '抽牌';
                    }
                }
            }
            
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
        
        // 修改這一行，向上調整卡片最終位置
        cardMesh.position.y = -10 + (10 * easeOutBack) + 5; // 增加5個單位向上移動
        cardMesh.rotation.y = Math.PI - (Math.PI * easeOut);
        
        requestAnimationFrame(flyIn);
    }
    
    flyIn();
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

// 清理資源
export function cleanup() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    // 移除事件監聽器
    if (renderer && renderer.domElement) {
        renderer.domElement.removeEventListener('mousedown', handleDragStart);
        renderer.domElement.removeEventListener('mousemove', handleDragMove);
        renderer.domElement.removeEventListener('mouseup', handleDragEnd);
        renderer.domElement.removeEventListener('mouseleave', handleDragEnd);
        renderer.domElement.removeEventListener('touchstart', handleTouchStart);
        renderer.domElement.removeEventListener('touchmove', handleTouchMove);
        renderer.domElement.removeEventListener('touchend', handleTouchEnd);
    }
    
    // 清除場景
    if (scene) {
        while(scene.children.length > 0) { 
            scene.remove(scene.children[0]); 
        }
    }
    
    // 釋放資源
    if (renderer) {
        renderer.dispose();
    }
}