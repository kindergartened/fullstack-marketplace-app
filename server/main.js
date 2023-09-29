import express from "express";
const app = express();
import dotenv from "dotenv";
import pkg from 'pg';
const { Client } = pkg;
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
    })
);
app.get('/express_backend', (req, res) => {
    res.send({express: 'Server started, zdarova lox'});
});

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
});

await client.connect();

const result = await client.query('SELECT * FROM users');
console.log(result.rows);

await client.end();