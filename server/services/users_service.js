import { DBClient } from "../db/db.js";
import { compareHashPassword, hashPassword } from "../crypto/passwords.js";
import { signJWT } from "../crypto/sessions.js";
import { getUserByEmailTx, getUserById, registerUser } from "../db/index.js";

export class UsersService {
    async login (req, res) {
        const {
            email,
            password
        } = req.body;

        if (!(email && password)) {
            res.status(400).send("Заполните все поля");
        }

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            const user = await getUserByEmailTx(dbClient, email);
            const compared = await compareHashPassword(user.hash_password, password);
            if (user && compared) {
                user.token = signJWT(user.id, email, user.name);
                res.cookie("user-session", user.token, {
                    httpOnly: true,
                    secure: true,
                });
                res.status(200).json(user);
            } else {
                res.status(400).send("Неверный логин или пароль");
            }
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Ошибка авторизации",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            await dbClient.Release();
        }
    }

    async register (req, res) {
        const {
            email,
            name,
            password
        } = req.body;

        if (!(email && name && password)) {
            res.status(400).send("All input is required");
        }

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            const oldUser = await getUserByEmailTx(dbClient, email);
            if (oldUser) {
                res.status(409).send("Пользователь с таким email уже существует.");
            } else {
                let now = new Date();
                const hashPass = await hashPassword(password);
                const user = await registerUser(dbClient, name, email, hashPass, now);
                user.token = signJWT(user.id, email, name);
                res.cookie("user-session", user.token, {
                    httpOnly: true,
                    secure: true,
                });
                res.status(201).json({
                    done: true,
                    user: user
                });

                await dbClient.Commit();
            }
        } catch (err) {
            res.send({
                message: "Ошибка регистрации",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {

            await dbClient.Release();
        }
    }

    async getUserById (req, res) {
        let id = req.params.id;

        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        let result;

        try {
            result = await getUserById(dbClient, id);
            await dbClient.Commit();
        } catch (err) {
            res.send({
                message: "Ошибка получения пользователя",
                err: err.message,
                done: false
            });
            await dbClient.Rollback();
        } finally {
            res.status(200).json(result.rows[0]);
            await dbClient.Release();
        }
    }

    async verifyUserMiddleware (req, res) {
        const dbClient = new DBClient();
        await dbClient.NewPool();
        await dbClient.Begin();

        try {
            const user = await getUserByEmailTx(dbClient, req.user.email);
            const newToken = signJWT(user.id, user.email, user.name);
            res.cookie("user-session", newToken, {
                httpOnly: true,
                secure: true,
            });
            res.status(200).json({
                message: "Добро пожаловать, " + req.user.name + "!",
                user: user
            });
            await dbClient.Commit();
        } catch (err) {
            return res.send({
                message: "Что-то пошло не так",
                err: err.message,
                done: false
            });
        } finally {
            await dbClient.Release();
        }
    }

}
