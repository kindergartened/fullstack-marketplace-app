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

async function delet(path, body) {
    return await axios.delete(`${host}${path}`, body).catch(function (err) {
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

export async function addToFav(userId,goodId) {
    return await post(`/add_to_fav`,{userId: userId, goodId: goodId});
}
export async function deleteFromFavById(goodId) {
    return await delet(`/delete_fav_by_id`,{goodId: goodId});
}
export async function queryMyFavourites(userId) {
    return await get(`/my_fav`,{userId: userId});
}

export async function addToCart(goodId) {
    return await post(`/add_to_cart`,{userId: 0, goodId: goodId});
}
export async function deleteFromCart(goodId) {
    return await delet(`/delete_from_cart`,{goodId: goodId});
}
export async function decreaseGoodCart(goodId) {
    return await post(`/decrease_good_cart`,{goodId: goodId});
}
export async function increaseGoodCart(goodId) {
    return await post(`/increase_good_cart`,{goodId: goodId});
}
export async function queryMyCart(userId) {
    return await get(`/get_my_cart`,{userId: userId});
}