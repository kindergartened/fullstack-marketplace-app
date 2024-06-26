import axios from "axios";
import toast from "react-hot-toast";
const host = "http://localhost:5000";

async function get(path, body) {
    return await axios.get(`${host}${path}`, body).catch(function (err) {
        toast(err.response.data.message, {
            position: "top-right",
            type: "error"
        });
    });
}

async function post(path, body) {
    return await axios.post(`${host}${path}`, body).catch(function (err) {
        toast(err.response.data.message, {
            position: "top-right",
            type: "error"
        });
    });
}

async function apiDelete(path, body) {
    return await axios.delete(`${host}${path}`, body).catch(function (err) {
        toast(err.response.data.message, {
            position: "top-right",
            type: "error"
        });
    });
}

export async function getGoods() {
    return await get("/get_goods");
}

export async function register(name, email, password) {
    return await post("/register", {name: name, email: email, password: password}).then(res => {
        document.cookie = "user-session=" + res.data.token;
        return res;
    });
}

export async function login(email, password) {
    return await post("/login", {email: email, password: password}).then(res => {
        document.cookie = "user-session=" + res.data.token;
        return res;
    });
}

export async function auth() {
    let cookies = document.cookie.split("user-session=");
    if (cookies.length < 2) {
        return;
    }
    return await post("/", {token: cookies[1]});
}

export async function addToFav(userId,goodId) {
    return await post("/add_to_fav",{userId: userId, goodId: goodId});
}
export async function deleteFromFavById(goodId, userId) {
    return await post("/delete_fav_by_id",{goodId: goodId, userId: userId});
}
export async function queryMyFavourites(userId) {
    return await get("/my_fav",{userId: userId});
}

export async function addToCart(goodId, userId) {
    return await post("/add_to_cart",{userId: userId, goodId: goodId});
}
export async function deleteFromCart(goodId) {
    return await apiDelete("/delete_from_cart",{goodId: goodId});
}
export async function decreaseGoodCart(goodId, userId) {
    return await post("/decrease_good_cart",{goodId: goodId, userId: userId});
}
export async function increaseGoodCart(goodId, userId) {
    return await post("/increase_good_cart",{goodId: goodId, userId: userId});
}
export async function queryMyCart(userId) {
    return await get("/get_my_cart",{userId: userId});
}
