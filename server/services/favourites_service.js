import { DBClient } from "../db/db.js";
import { addToFav, queryMyFavourites } from "../db/favourites.js";

export class FavouritesService {
    async addToFav(req, res) {
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

    async deleteFromFavById(req, res) {
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

    async queryMyFavourites(req, res) {
        const {userId} = req.body;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let result;

        try {
            result = await queryMyFavourites(dbClient, userId);
            await dbClient.Commit();
        } catch (err) {
            res.send({message: "Ошибка получения избранных товаров.", err: err.message, done: false});
            await dbClient.Rollback();
        } finally {
            res.send(result.rows);
            await dbClient.Release();
        }

    }

}
