import { DBClient } from "../db/db.js";
import { addToFav, queryMyFavourites } from "../db/favourites.js";
import { getGoodsByIds } from "../db/index.js";

export class FavouritesService {
    addToFav = async (req, res) => {
        const {userId, goodId} = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let now = new Date();

        try {
            await addToFav(dbClient, userId, goodId, now);
            await dbClient.Commit();
        } catch (err) {
            res.send({message: "Ошибка во время добавления в избранное.", err: err.message, done: false});
            await dbClient.Rollback();
        } finally {
            res.send({done: true});
            await dbClient.Release();
        }
    }

    deleteFromFavById = async (req, res) => {
        const {id} = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            await addToFav(dbClient, id);
            await dbClient.Commit();
        } catch (err) {
            res.send({message: "Ошибка во время удаления из избранного.", err: err.message, done: false});
            await dbClient.Rollback();
        } finally {
            res.send({done: true});
            await dbClient.Release();
        }

    }

    queryMyFavourites = async (req, res) => {
        const {userId} = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let output = {
            Rows: {},
            Graph: {}
        }

        try {
            output = await this.queryMyFavouritesTx(dbClient, userId);
            await dbClient.Commit();
        } catch (err) {
            res.send({message: "Ошибка получения избранных товаров.", err: err.message, done: false});
            await dbClient.Rollback();
        } finally {
            res.send(output);
            await dbClient.Release();
        }

    }

    queryMyFavouritesTx = async (client, userId) => {
        const output = {
            Rows: {},
            Graph: {}
        }
        const result = await queryMyFavourites(client, userId);
        let goodIds, goods;
        if (result.rows.length) {
            goodIds = result.rows.map(e => e.id);
            goods = getGoodsByIds(client, goodIds);
        }
        output.Rows = result.rows;
        output.Graph = {Goods: goods};
        return output;
    }

}
