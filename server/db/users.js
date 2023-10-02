import {DBConnect, DBClose} from "./db.js";

export async function getUserById(req, res) {
    let id = req.params.id;
    const dbSession = DBConnect();
    dbSession.connect();

    const result = await dbSession.query('SELECT * FROM users WHERE id = $1', [id]);
    DBClose(dbSession);

    return res.json(result.rows);
}