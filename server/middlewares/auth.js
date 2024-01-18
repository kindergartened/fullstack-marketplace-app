import {verifyJWT} from "../crypto/sessions.js";

export function verifyToken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        req.user = verifyJWT(token);
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}
