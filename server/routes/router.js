import Router from 'express-promise-router';
import {
    addToCart,
    decreaseGoodCart,
    deleteFromCart,
    getGoods, getUserByEmailTx,
    getUserById,
    increaseGoodCart, login, queryMyCart,
    register
} from "../db/index.js";
import {verifyToken} from "../middlewares/auth.js";
import {DBClose, DBConnect} from "../db/db.js";
import {addToFav, deleteFromFavById, queryMyFavourites} from "../db/favourites.js";

const router = new Router();

// Goods
router.get('/get_goods', getGoods);

// Users
router.get('/get_user_by_id/:id', getUserById);
router.post('/register', register);
router.post('/login', login);

// Routes
router.post('', addToFav)
router.delete('', deleteFromFavById)
router.get('', queryMyFavourites)

// Cart
router.post('/add_to_cart', addToCart);
router.delete('/delete_from_cart', deleteFromCart);
router.post('/decrease_good_cart', decreaseGoodCart);
router.post('/increase_good_cart', increaseGoodCart);
router.get('/get_my_cart', queryMyCart);

// Middlewares
router.post("/", verifyToken, async (req, res) => {
    const dbSession = DBConnect();
    dbSession.connect();
    try {
        const user = await getUserByEmailTx(dbSession, req.user.email);
        res.status(200).json({message: "Welcome, " + req.user.name + "!", user: user});
    } catch (err) {
        return res.send({message: "Unexpected err.", err: err.message, done: false});
    } finally {
        DBClose(dbSession);
    }
})

export const Routes = router;