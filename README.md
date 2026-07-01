# shoe-ecommerce

鞋類電商網站前端,使用 Vue 3 + Vite 開發。包含首頁、商品列表、商品詳情、精選系列、品牌故事及會員登入／註冊等頁面。

## 技術棧

- **Vue 3**(`<script setup>` 組合式 API)
- **Vite 8** — 開發伺服器與打包工具
- **Vue Router** — 前端路由(History 模式)
- **Pinia** — 狀態管理
- **axios** — 串接後端 API
- **js-cookie** — 儲存登入 token / 會員資訊
- **Sass**(`sass-embedded`)— 樣式,搭配自訂的 SCSS 架構
- **Bootstrap 5 / Bootstrap Icons** — 樣式與圖示
- **Swiper** — 輪播元件
- **ESLint + oxlint + Prettier** — 程式碼檢查與格式化

## 環境需求

- Node.js `^22.18.0` 或 `>=24.12.0`

## 開始使用

```sh
# 安裝相依套件
npm install

# 啟動開發伺服器(熱重載)
npm run dev

# 打包正式版到 dist/
npm run build

# 本機預覽打包結果
npm run preview
```

## 環境變數

專案使用 `VITE_API_URL` 設定後端 API 位址,並依 Vite 模式自動載入對應的 env 檔:

| 檔案               | 使用時機          | 是否進版控   |
| ------------------ | ----------------- | ------------ |
| `.env.example`     | 範本(供複製參考)  | ✅           |
| `.env.development` | `npm run dev`     | ✅           |
| `.env.production`  | `npm run build`   | ✅           |
| `.env` / `*.local` | 個人 / 機密設定   | 🚫(已忽略)   |

第一次設定:

```sh
cp .env.example .env
```

- 開發時預設連本機後端 `http://localhost:3010`。
- 部署前記得將 `.env.production` 的 `VITE_API_URL` 換成正式 API 網址。
- 機密值請放到 `.env.local` 或 `.env.*.local`(不會被提交)。

## 程式碼品質

```sh
# 依序執行 oxlint 與 eslint(皆會自動修正)
npm run lint

# 以 Prettier 格式化 src/
npm run format
```

## 專案結構

```
src/
├── main.js              # 進入點:掛載 Pinia、Router、全域樣式
├── App.vue              # 根組件
├── router/              # 路由設定(頁面多採懶加載)
├── stores/             # Pinia 狀態
├── components/          # 共用組件(Nav、Footer、HightLight)
├── views/              # 各頁面
│   ├── IndexView.vue              # 首頁(/)
│   ├── ProductAllView.vue         # 所有商品(/products)
│   ├── ProductInfoView.vue        # 商品詳情(/products/:id)
│   ├── ProductCollectionView.vue  # 精選系列(/collection)
│   ├── StoryView.vue              # 品牌故事(/story)
│   ├── LoginView.vue              # 登入(/login)
│   └── RegisterView.vue           # 註冊(/register)
└── assets/
    ├── images/         # 圖片素材(依頁面分資料夾)
    └── scss/           # 樣式
        ├── all.scss            # 樣式進入點(統一匯入)
        ├── base/               # 變數、mixin、reset、字體
        ├── layout/             # container、nav
        ├── pages/              # 各頁面樣式
        ├── components/         # 按鈕、麵包屑等
        └── utilities/          # display、spacing、helper
```

## 路由總覽

| 路徑            | 名稱         | 頁面     | 分頁標題              |
| --------------- | ------------ | -------- | --------------------- |
| `/`             | index        | 首頁     | 首頁｜URBNSTEP        |
| `/products`     | products     | 所有商品 | 所有商品｜URBNSTEP    |
| `/products/:id` | product-info | 商品詳情 | {商品名稱}｜URBNSTEP  |
| `/collection`   | collection   | 精選系列 | 我的收藏｜URBNSTEP    |
| `/story`        | story        | 品牌故事 | 品牌故事｜URBNSTEP    |
| `/login`        | login        | 登入     | 會員登入｜URBNSTEP    |
| `/register`     | register     | 註冊     | 會員註冊｜URBNSTEP    |

- 每個路由以 `meta.title` 定義頁名,由 `router.afterEach` 統一寫入 `document.title`(格式 `頁名｜URBNSTEP`)。
- `/collection` 需登入;未登入會導向登入頁,登入後自動跳回。切換路由時會自動捲回頁面頂端。

## 推薦開發環境

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)(並停用 Vetur)。
