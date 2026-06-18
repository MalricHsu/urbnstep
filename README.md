# shoe-ecommerce

鞋類電商網站前端,使用 Vue 3 + Vite 開發。包含首頁、商品列表、商品詳情、精選系列、品牌故事及會員登入／註冊等頁面。

## 技術棧

- **Vue 3**(`<script setup>` 組合式 API)
- **Vite 8** — 開發伺服器與打包工具
- **Vue Router** — 前端路由(History 模式)
- **Pinia** — 狀態管理
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

| 路徑            | 名稱         | 頁面     |
| --------------- | ------------ | -------- |
| `/`             | index        | 首頁     |
| `/products`     | products     | 所有商品 |
| `/products/:id` | product-info | 商品詳情 |
| `/collection`   | collection   | 精選系列 |
| `/story`        | story        | 品牌故事 |
| `/login`        | login        | 登入     |
| `/register`     | register     | 註冊     |

## 推薦開發環境

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)(並停用 Vetur)。
