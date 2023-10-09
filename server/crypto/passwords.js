import {compare, hash} from "bcrypt";

const salt = 3;

export function hashPassword(password) {
    return hash(password, salt).catch(err => {
        console.error(err.message);
    })
}

export function compareHashPassword(hashPassword, password) {
    return compare(password, hashPassword);
}
