import {DBConnect, DBClose} from "./db.js";


async function nextId(dbSession) {
    const result = await dbSession.query("SELECT nextval('carts_id_seq')");

    return result.rows[0].nextval;
}

export async function addToCart(req, res) {
    const {userId, goodId} = req.body;

    const dbSession = DBConnect();
    dbSession.connect();

    let now = new Date();

    let result;

    nextId(dbSession).then(async id => {
        result = await dbSession.query("INSERT INTO carts (id, user_id, good_id, created_at) VALUES ($1, $2, $3, $4)", [id, userId, goodId, now]);
        return res.send({done: true});
    }).catch(err => {
        return res.send({message: "Unexpected err.", err: err.message, done: false});
    }).finally(() => {
        DBClose(dbSession);
    });
}

export async function deleteFromCart(req, res) {
    const {id} = req.body;
    const dbSession = DBConnect();

    try {
        dbSession.connect();

        await dbSession.query("DELETE * FROM carts WHERE id = $1", [id]);
        return res.send({done: true});
    } catch (err) {
        return res.send({message: "Unexpected err.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function increaseGoodCart(req, res) {
    const {id} = req.body;
    const dbSession = DBConnect();

    try {
        dbSession.connect();
        const good = getCartGoodById(dbSession, id);
        let newCount = good.count + 1;

        await dbSession.query("UPDATE carts SET count = $1 WHERE id = $2", [newCount, id]);
        return res.send({done: true});
    } catch (err) {
        return res.send({message: "Unexpected err.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function decreaseGoodCart(req, res) {
    const {id} = req.body;
    const dbSession = DBConnect();

    try {
        dbSession.connect();
        const good = getCartGoodById(dbSession, id);
        let newCount = good.count - 1;
        if (newCount < 0) {
            throw new Error("Количество не может быть меньше нуля");
        }

        await dbSession.query("UPDATE carts SET count = $1 WHERE id = $2", [newCount, id]);
        return res.send({done: true});
    } catch (err) {
        return res.send({message: "Unexpected err.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

// TODO: get cart

async function getCartGoodById(dbSession, id) {
    const result = await dbSession.query('SELECT * FROM carts WHERE id = $1', [id]);

    return result.rows[0];
}