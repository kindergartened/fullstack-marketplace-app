import axios from "axios";

const host = "http://localhost:5000";

async function get(path, body) {
    return await axios.get(`${host}${path}`, body).catch(function (err) {
        alert(err.message);
    });
}

async function post(path, body) {
    return await axios.post(`${host}${path}`, body).catch(function (err) {
        alert(err.message);
    });
}

export async function getGoods() {
    return await get(`/get_goods`);
}

export async function register(name, email, password) {
    return await post(`/register`, {name: name, email: email, password: password});
}

export async function login(email, password) {
    return await post(`/login`, {email: email, password: password});
}

export async function auth() {
    return await post(`/`);
}