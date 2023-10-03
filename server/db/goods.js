import {DBConnect, DBClose} from "./db.js";

export async function getGoods(req, res) {
    const dbSession = DBConnect();
    dbSession.connect();

    const result = await dbSession.query('SELECT * FROM goods');
    DBClose(dbSession);

    return res.json(result.rows);
}