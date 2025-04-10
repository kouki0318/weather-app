## 🛠 プロジェクトのセットアップ手順（React + Vite）

このプロジェクトは、ReactとViteを使って構築されています。  
以下の手順に従ってローカル環境で立ち上げることができます。

---

### ✅ ステップ1：Node.js が入っているか確認

```bash
node -v
npm -v
```

Node.js / npm が未インストールの場合は、https://nodejs.org/ja から LTS バージョンをインストールしてください。

### ✅ ステップ2：ViteでReactプロジェクト作成

```bash
npm create vite@latest
```

対話形式で以下のような選択肢が出ます：

```pgsql
✔ Project name: › my-search-app（※ここは好きな名前でOK）
✔ Select a framework: › React
✔ Select a variant: › JavaScript（または TypeScript でもOK）
```

### ✅ ステップ3：依存パッケージをインストール

```bash
cd my-search-app
npm install
```

### ✅ ステップ4：開発サーバーを起動！

```bash
npm run dev
```

📝 備考
Viteは高速なビルド＆開発サーバーを提供するモダンなツールです。

src/App.jsx を編集することで、すぐに開発を始められます。
