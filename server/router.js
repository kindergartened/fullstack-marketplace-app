import express from "./main.js";
import {getGoods} from "./db/goods.js";
import {getUserById} from "./db/users.js";

express.get('/api/get_goods', getGoods);
express.get('/api/get_user_by_id/:id', getUserById)