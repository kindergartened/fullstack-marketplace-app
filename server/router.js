import express from "express";
import {addToCart, decreaseGoodCart, deleteFromCart, getGoods, getUserById, increaseGoodCart} from "./db/index.js";
const router = express.Router();

// Goods
router.get('/get_goods', getGoods);

// Users
router.get('/get_user_by_id/:id', getUserById);

// Cart
router.post('/add_to_cart', addToCart);
router.delete('/delete_from_cart', deleteFromCart);
router.post('/decrease_good_cart', decreaseGoodCart);
router.post('/increase_good_cart', increaseGoodCart)

export const Router = router;