import { DBClient } from "../db/db.js";
import { addToCart, deleteFromCart, getCartGoodById, queryMyCart, updateGoodCartCount } from "../db/index.js";

export class CartService {
    async addToCart (req, res) {
        const {
            userId,
            goodId
        } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let now = new Date();

        try {
            await addToCart(dbClient, userId, goodId, now);
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Ошибка добавления товара в корзину.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            res.send({ done: true });
            await dbClient.Release();
        }
    }

    async deleteFromCart (req, res) {
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

    async increaseGoodCart (req, res) {
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

    async decreaseGoodCart (req, res) {
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

    async queryMyCart (req, res) {
        const { userId } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();
        let result;

        try {
            result = await queryMyCart(dbClient, userId);
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Unexpected err.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            res.send(result.rows);
            await dbClient.Release();
        }

    }
}
