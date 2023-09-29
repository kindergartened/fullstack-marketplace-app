import {DBConnect} from "./db.js";

export async function getUserById() {
    const dbSession = DBConnect();
    dbSession.connect();

    return await dbSession.query('SELECT * FROM users WHERE id = $1', []);
}