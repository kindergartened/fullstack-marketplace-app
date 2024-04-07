import { getGoods } from "../db/index.js";
import { DBClient } from "../db/db.js";

export class GoodsService {
    getGoods = async (req, res) => {
        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let result;

        try {
            result = await getGoods(dbClient);
            await dbClient.Commit();
        } catch (err) {
            res.send({message: "Ошибка во время получения товаров.", err: err.message, done: false});
            await dbClient.Rollback();
        } finally {
            res.send(result.rows);
            await dbClient.Release();
        }
    }
}
