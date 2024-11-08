require('module-alias/register'); // module-aliasの設定を追加

const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 5000;

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'exampleuser',
  password: process.env.DB_PASSWORD || 'examplepass',
  database: process.env.DB_NAME || 'exampledb'
};

// MySQL接続確認
app.get('/test-db', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT "Hello from MySQL" AS message');
    res.json(rows);
    await connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

