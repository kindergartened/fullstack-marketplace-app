import express from "express";
import {getGoods} from "./db/goods.js";
import {getUserById} from "./db/users.js";
const router = express.Router();

// Goods
router.get('/get_goods', getGoods);

// Users
router.get('/get_user_by_id/:id', getUserById);

export const Router = router;