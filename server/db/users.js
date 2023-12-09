import {DBClose, DBConnect} from "./db.js";
import {compareHashPassword, hashPassword} from "../crypto/passwords.js";
import {signJWT} from "../crypto/sessions.js";


async function nextId(dbSession) {
    const result = await dbSession.query("SELECT nextval('users_id_seq')");
    return result.rows[0].nextval;
}

export async function login(req, res) {
    const dbSession = DBConnect();
    dbSession.connect();

    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const user = await getUserByEmailTx(dbSession, email);
        const compared = await compareHashPassword(user.hash_password, password);
        if (user && compared) {
            user.token = signJWT(user.id, email, user.name);
            res.cookie("user-session", user.token, {
                httpOnly: true,
                secure: true,
            });
            res.status(200).json(user);
        } else res.status(400).send("Invalid Credentials");
    } catch (err) {
        return res.send({message: "Unexpected err.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function register(req, res) {
    const {email, name, password} = req.body;

    if (!(email && name && password)) {
        res.status(400).send("All input is required");
    }

    const dbSession = DBConnect();
    dbSession.connect();

    const oldUser = await getUserByEmailTx(dbSession, email);
    if (oldUser) {
        return res.status(409).send("Пользователь с таким email уже существует.");
    }

    let now = new Date();
    const hashPass = await hashPassword(password);

    try {
        const id = await nextId(dbSession);
        await dbSession.query("INSERT INTO users (id, name, email, hash_password, created_at) VALUES ($1, $2, $3, $4, $5)", [id, name, email, hashPass, now]);
        const user = {email: email};
        user.token = signJWT(id, email, name);
        res.cookie("user-session", user.token, {
            httpOnly: true,
            secure: true,
        });
        return res.status(201).json({done: true, user: user});
    } catch (err) {
        return res.send({message: "Unexpected err.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
}

export async function getUserById(req, res) {
    let id = req.params.id;
    const dbSession = DBConnect();
    dbSession.connect();

    const result = await dbSession.query('SELECT * FROM users WHERE id = $1', [id]);
    DBClose(dbSession);

    return res.json(result.rows);
}

export async function getUserByEmailTx(dbSession, email) {
    const result = await dbSession.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
}
