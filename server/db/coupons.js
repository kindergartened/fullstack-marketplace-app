import {DBClose, DBConnect} from "./db.js";

export async function queryCoupons(req, res) {
    const {userId} = req.body;
    const dbSession = DBConnect();

    try {
        dbSession.connect();
        const result = await dbSession.query("SELECT * FROM Coupons WHERE user_id = $1", [userId]);
        return res.send(result.rows);
    } catch (err) {
        return res.send({message: "Ошибка получения промокодов.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function applyCouponToCart(req, res) {
    const {id} = req.body;
    
    const dbSession = DBConnect();
    dbSession.connect();

    try {
        await dbSession.query("UPDATE GOODS SET(usingcount=usingcount-1) where id = $1", [id]);
        //скидки
        return res.send({done: true});
    } catch (err) {
        return res.send({message: "Ошибка во время применения промокода.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function CancelCouponFromCart(req, res) {
    const {id} = req.body;
    
    const dbSession = DBConnect();
    dbSession.connect();

    try {
        await dbSession.query("UPDATE GOODS SET(usingcount=usingcount+1) where id = $1", [id]);
        //скидки
        return res.send({done: true});
    } catch (err) {
        return res.send({message: "Ошибка во время отмены промокода.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}