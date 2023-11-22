import {DBClose, DBConnect} from "./db.js";

async function nextId(dbSession) {
    const result = await dbSession.query("SELECT nextval('favourites_id_seq')");

    return result.rows[0].nextval;
}

export async function addToFav(req, res) {
    const {userId, goodId} = req.body;

    const dbSession = DBConnect();
    dbSession.connect();

    let now = new Date();

    let result;

    nextId(dbSession).then(async id => {
        result = await dbSession.query("INSERT INTO favoutites (id, user_id, good_id, created_at) VALUES ($1, $2, $3, $4)", [id, userId, goodId, now]);
        return res.send({done: true});
    }).catch(err => {
        return res.send({message: "Ошибка во время добавления в избранное.", err: err.message, done: false});
    }).finally(() => {
        DBClose(dbSession);
    });
}

export async function deleteFromFavById(req, res) {
    const {id} = req.body;

    const dbSession = DBConnect();
    dbSession.connect();

    try {
        await dbSession.query("DELETE FROM favourites WHERE id = $1", [id]);
        return res.send({done: true});
    } catch (err) {
        return res.send({message: "Ошибка во время удаления из избранного.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function queryMyFavourites(req, res) {
    const {userId} = req.body;
    const dbSession = DBConnect();

    try {
        dbSession.connect();
        const result = await dbSession.query("SELECT * FROM favourites WHERE user_id = $1", [userId]);
        return res.send(result.rows);
    } catch (err) {
        return res.send({message: "Ошибка получения избранных товаров.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}