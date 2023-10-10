import jwt from "jsonwebtoken";

export function signJWT(id, email, name) {
    return jwt.sign(
        {userId: id, email, name},
        process.env.JWT_TOKEN,
        {
            expiresIn: "24h",
        }
    );
}

export function verifyJWT(token) {
    return jwt.verify(token, process.env.JWT_TOKEN);
}