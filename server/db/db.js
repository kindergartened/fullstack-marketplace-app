import pkg from "pg";

const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

export class DBClient {
    #client;

    get Pool () {
        return this.#client;
    }

    async NewPool () {
        const pool = new Pool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
        });
        this.#client = await pool.connect();
    }

    async Begin () {
        await this.#client.query("BEGIN");
    }

    async Commit () {
        await this.#client.query("COMMIT");
    }

    async Rollback () {
        await this.#client.query("ROLLBACK");
    }

    async Release () {
        await this.#client.release();
    }

}
