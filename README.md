# KMT抽牌小遊戲

這是一個使用Three.js開發的簡單撲克牌抽卡遊戲。玩家可以點擊"抽牌"按鈕來抽取隨機撲克牌，並將它們收集在集卡書中。

## 功能特點

- 3D撲克牌動畫效果
- 隨機抽取不同花色和點數的撲克牌
- 集卡系統，保存已抽取的卡牌
- 本地存儲功能，保存抽取的卡片記錄
- 響應式設計，適合手機和桌面瀏覽器

## 環境需求

- Node.js (建議使用 14.x 或更新版本)
- npm 或 yarn

## 如何在本機測試執行

### 環境設定

1. 首先確保你已安裝 Node.js 和 npm：
   ```bash
   node -v
   npm -v
   ```

2. 克隆或下載專案到本地：
   ```bash
   git clone git@github.com:junsuwhy/KCG.git
   cd KCG
   ```

3. 安裝專案依賴：
   ```bash
   npm install
   ```

### 使用 Vite 運行專案

1. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

2. 開發伺服器啟動後，打開瀏覽器訪問以下網址：
   ```
   http://localhost:5173
   ```

### 打包專案

如果需要打包專案以便部署到生產環境：

```bash
npm run predeploy
```

打包後的檔案將會在 `build` 目錄中。

## 舊方法：直接使用靜態檔案

如果不想使用 Node.js 環境，也可以採用以下方法：

1. 下載Three.js庫：
   - 訪問 https://threejs.org/build/three.min.js
   - 將下載的檔案放入 `js` 資料夾中，替換掉目前的 `three.min.js` 檔案
   - 或者修改 `index.html` 中的引用，使用CDN路徑

2. 在本地運行：
   - 使用本地伺服器運行此專案（如 Live Server 擴展、Python 的 http.server 等）
   - 或直接開啟 `index.html` 檔案（某些瀏覽器可能需要啟用本地檔案存取權限）

## 檔案結構

```
KCG/
│
├── index.html          # 主HTML檔案
├── css/
│   └── style.css       # 樣式表
├── js/
│   ├── app.js          # 主要應用程式邏輯
│   └── collection.js   # 集卡書系統邏輯
├── images/             # 卡片圖片和圖示
├── node_modules/       # NPM依賴包
├── package.json        # 專案配置文件
└── README.md           # 說明文件
```

## 自定義

- 要新增更多卡牌類型，請編輯 `app.js` 檔案中的 `loadCardsFromCSV` 函數
- 要修改卡牌外觀，可以調整 `createCardTexture` 函數
- 要更改界面樣式，編輯 `style.css` 檔案

## 注意事項

- 遊戲使用 `localStorage` 保存卡牌收集記錄，清除瀏覽器數據會導致收集記錄丟失
- 3D效果需要瀏覽器支援 WebGL