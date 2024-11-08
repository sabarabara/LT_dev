# Node.js 18.17の公式イメージを使用
FROM node:18.17

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# サーバーを3000ポートでリッスン
EXPOSE 5000

# サーバーを起動
CMD ["node", "server.js"]


