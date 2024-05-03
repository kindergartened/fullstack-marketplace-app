import { DBClient } from "../db/db.js";
import { addToFav, deleteFromFavById, getFromFavByGoodUserIds, queryMyFavourites } from "../db/favourites.js";
import { getGoodsByIds } from "../db/index.js";

export class FavouritesService {
    addToFav = async (req, res) => {
        const {
            userId,
            goodId
        } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let now = new Date();

        try {
            await addToFav(dbClient, userId, goodId, now);
            res.send({ done: true });
            await dbClient.Commit();
        } catch (err) {
            res.status(500).send({
                message: "Ошибка во время добавления в избранное.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            await dbClient.Release();
        }
    };

    deleteFromFavById = async (req, res) => {
        const { userId, goodId } = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            const fav = (await getFromFavByGoodUserIds(dbClient, userId, goodId)).rows[0];
            await deleteFromFavById(dbClient, fav.id);
            await dbClient.Commit();
            res.send({ done: true });
        } catch (err) {
            res.status(500).send({
                message: "Ошибка во время удаления из избранного.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            await dbClient.Release();
        }

    };

    queryMyFavourites = async (req, res) => {
        const { userId } = req.body;
        console.log(userId);

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let output = {
            Rows: {},
            Graph: {}
        };

        try {
            output = await this.queryMyFavouritesTx(dbClient, userId);
            console.log(output);
            await dbClient.Commit();
            res.send(output);
        } catch (err) {
            res.status(500).send({
                message: "Ошибка получения избранных товаров.",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            await dbClient.Release();
        }

    };

    queryMyFavouritesTx = async (client, userId) => {
        const output = {
            Rows: {},
            Graph: {}
        };
        const result = (await queryMyFavourites(client, userId)).rows;
        let goodIds, goods;
        if (result.length) {
            goodIds = result.map(e => +e.good_id);
            goods = (await getGoodsByIds(client, goodIds)).rows;
        }
        output.Rows = result;
        output.Graph = { Goods: goods };
        return output;
    };

}
