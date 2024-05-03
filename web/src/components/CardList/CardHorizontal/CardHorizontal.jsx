import styles from "./CardHorizontal.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import toast from "react-hot-toast";
import { addToCart, addToFav, decreaseGoodCart, deleteFromFavById, increaseGoodCart } from "../../../api";
import { useMeState } from "../../../hooks/state";

export const CardHorizontal = ({
    CardItem,
    IsCart,
    CartItem
}) => {
    const {
        user,
        setUser
    } = useMeState();

    const increaseGoodCartClick = (goodId) => {
        increaseGoodCart(goodId, user.id).then(res => {
            if (res.data.done) {
                setUser(prev => {
                    const exist = prev.cart.Rows.findIndex(e => e.good_id === CardItem.id);
                    prev.cart.Rows[exist].count++;
                    return prev;
                });
            }
        });
    };

    const decreaseGoodCartClick = (goodId) => {
        decreaseGoodCart(goodId, user.id).then(res => {
            if (res.data.done) {
                setUser(prev => {
                    const exist = prev.cart.Rows.find(e => e.good_id === CardItem.id);
                    exist.count--;
                    return prev;
                });
            }
        });
    };

    const addToCartClick = (goodId) => {
        if (!user) {
            toast("Для добавления в корзину - авторизуйтесь");
        }
        addToCart(goodId, user.id).then(res => {
            if (res.data.done) {
                setUser(prev => {
                    return {
                        ...prev,
                        cart: {
                            Rows: [...prev.cart.Rows, CardItem],
                        }
                    };
                });
                toast(`Товар "${CardItem.title}" добавлен в корзину`);
            }
        });
    };

    const addToFavouritesClick = (goodId) => {
        if (!user.favMap[goodId]) {
            addToFav(+user.id, +goodId).then(res => {
                if (res.data.done) {
                    setUser(prev => {
                        const newVal = {};
                        newVal[goodId] = !prev.favMap[goodId];

                        return {
                            ...prev,
                            favMap: {
                                ...prev.favMap,
                                ...newVal,
                            }
                        };
                    });
                    toast(`Товар "${CardItem.title}" добавлен в избранное`);
                }
            });
        } else {
            deleteFromFavById(+goodId, +user.id).then(res => {
                if (res.data.done) {
                    setUser(prev => {
                        const newVal = {};
                        newVal[goodId] = !prev.favMap[goodId];

                        return {
                            ...prev,
                            favMap: {
                                ...prev.favMap,
                                ...newVal,
                            }
                        };
                    });
                    toast(`Товар "${CardItem.title}" убран из избранного`);
                }
            });
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={CardItem.img_url}/>
            </div>
            <div className="d-flex flex-column justify-content-between p-3 w-100">
                <div className={styles.card_header}>
                    <div className={styles.typebrand}>
                        <span className={styles.brand}>{CardItem.title}</span>
                        <span className={styles.type}>{CardItem.description}</span>
                    </div>
                    <span className={styles.price}>{CardItem.price} ₽</span>
                </div>
                <div className={styles.footer}>
                    {IsCart ? <div className={styles.counter}>
                        <button className={styles.counter_btn}
                            onClick={() => decreaseGoodCartClick(CardItem.id)}>
                            <i className="fas fa-minus"></i>
                        </button>

                        <span>{CartItem.count}</span>

                        <button className={styles.counter_btn}
                            onClick={() => increaseGoodCartClick(CardItem.id)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div> : <div className={styles.buts}>
                        {
                            user?.favMap[CardItem.id] ?
                                <AiFillHeart className={styles.red_heart}
                                    onClick={() => addToFavouritesClick(CardItem.id)}
                                />
                                :
                                <AiOutlineHeart onClick={() => addToFavouritesClick(CardItem.id)}
                                    className={styles.heart}/>
                        }

                        <LiaCartArrowDownSolid onClick={() => addToCartClick(CardItem.id)} className={styles.cart}/>
                    </div>}
                    {IsCart && <RiDeleteBinLine className={styles.card_del}/>}
                </div>
            </div>
        </div>
    );
};

