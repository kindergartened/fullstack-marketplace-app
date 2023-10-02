import pkg from 'pg';
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config();

export function DBConnect() {
    return new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    });
}

export function DBClose(dbSession) {
    dbSession.end();
}