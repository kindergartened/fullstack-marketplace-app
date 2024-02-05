import {DBClose, DBConnect} from "./db.js";

async function nextId(dbSession) {
    const result = await dbSession.query("SELECT nextval('orders_id_seq')");

    return result.rows[0].nextval;
}

export async function GetOrders(req, res) {
    const {userId} = req.body;
    const dbSession = DBConnect();

    try {
        dbSession.connect();
        const result = await dbSession.query("SELECT * FROM orders WHERE user_id = $1", [userId]);
        return res.send(result.rows);
    } catch (err) {
        return res.send({message: "Ошибка получения избранных товаров.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function CreateOrder(req, res) {
    const {prodcount, totalprice,orderadress} = req.body;

    const dbSession = DBConnect();
    dbSession.connect();

    nextId(dbSession).then(async id => {
        let result = await dbSession.query("INSERT INTO orders (id, prodcount, totalprice, orderadress) VALUES ($1, $2, $3, $4)", [id, prodcount, totalprice, orderadress]);
        return res.send({done: true});
    }).catch(err => {
        return res.send({message: "Ошибка во время создания заказа.", err: err.message, done: false});
    }).finally(() => {
        DBClose(dbSession);
    });
}
