import {DBConnect} from "./db.js";

export async function getGoods() {
    const dbSession = DBConnect();
    dbSession.connect();

    return await dbSession.query('SELECT * FROM goods');
}