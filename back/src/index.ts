import mysql from "mysql";
import express from "express";

// 環境変数を使用してDBにアクセスする
const pool = mysql.createPool({
  port: 3306, // (1)
  host: process.env.MYSQL_HOST, // (2)
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// HTTPサーバを起動する
const port = process.env.SERVER_PORT || 8000;
const app = express();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
