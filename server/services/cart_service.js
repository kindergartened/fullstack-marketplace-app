import { DBClient } from "../db/db.js";
import {
    addToCart,
    deleteFromCart,
    getCartGoodById, getCartGoodByUserGoodId,
    getGoodsByIds,
    queryMyCart,
    updateGoodCartCount
} from "../db/index.js";

export class CartService {
    addToCart = async (req, res) => {
        const {
            userId,
            goodId
        } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let now = new Date();

        try {
            const exist = (await getCartGoodByUserGoodId(dbClient, goodId, userId)).rows;
            if (exist.length) {
                await updateGoodCartCount(dbClient, exist[0].count + 1, exist[0].id);
            } else await addToCart(dbClient, userId, goodId, now);
            res.status(200).json({ done: true });
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Ошибка добавления товара в корзину.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            await dbClient.Release();
        }
    }

    deleteFromCart = async (req, res) => {
        const { id } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            await deleteFromCart(dbClient, id);
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Ошибка удаления товара из корзины.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            res.send({ done: true });
            await dbClient.Release();
        }

    }

    increaseGoodCart = async (req, res) => {
        const { id } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            const good = getCartGoodById(dbClient, id);
            let newCount = good.count + 1;

            await updateGoodCartCount(dbClient, newCount, id);
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Ошибка увеличения количества товара в корзине.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            res.send({ done: true });
            await dbClient.Release();
        }

    }

    decreaseGoodCart = async (req, res) => {
        const { id } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            const good = getCartGoodById(dbClient, id);
            let newCount = good.count - 1;
            if (newCount < 0) {
                throw new Error("Количество не может быть меньше нуля");
            } else {
                await updateGoodCartCount(dbClient, newCount, id);
                await dbClient.Commit();
            }
        } catch (err) {
            res.send({
                message: "Ошибка уменьшения количества товара в корзине.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            res.send({ done: true });
            await dbClient.Release();
        }
    }

    queryMyCart = async (req, res) => {
        const { userId } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();
        let output = {
            Rows: {},
            Graph: {}
        }

        try {
            output = await this.queryMyCartTx(dbClient, userId);
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Unexpected err.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            res.send(output);
            await dbClient.Release();
        }
    }

    queryMyCartTx = async (client, userId) => {
        const output = {
            Rows: {},
            Graph: {}
        }
        let goodIds, goods;
        const result = (await queryMyCart(client, userId)).rows;
        if (result.length) {
            goodIds = result.map(e => e.good_id);
            goods = (await getGoodsByIds(client, goodIds)).rows;
        }
        output.Rows = result;
        output.Graph = {Goods: goods};
        return output;
    }
}
