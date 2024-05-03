import Router from 'express-promise-router';
import {verifyToken} from "../middlewares/auth.js";
import { CartService, FavouritesService, GoodsService, UsersService } from "../services/index.js";

const router = new Router();
const cartService = new CartService();
const favService = new FavouritesService();
const goodService = new GoodsService();
const userService = new UsersService();

// Goods
router.get('/get_goods', goodService.getGoods);

// Users
router.get('/get_user_by_id/:id', userService.getUserById);
router.post('/register', userService.register);
router.post('/login', userService.login);

// Favourites
router.post('/add_to_fav', favService.addToFav)
router.post('/delete_fav_by_id', favService.deleteFromFavById)
router.get('/my_fav', favService.queryMyFavourites)

// Cart
router.post('/add_to_cart', cartService.addToCart);
router.delete('/delete_from_cart', cartService.deleteFromCart);
router.post('/decrease_good_cart', cartService.decreaseGoodCart);
router.post('/increase_good_cart', cartService.increaseGoodCart);
router.get('/get_my_cart', cartService.queryMyCart);

// Middlewares
router.post("/", verifyToken, userService.verifyUserMiddleware)

export const AppRouter = router;
