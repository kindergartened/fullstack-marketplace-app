import styles from "./CardComponent.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { addToCart, addToFav, deleteFromFavById } from "../../../api";
import { useMeState } from "../../../hooks/state";
import toast from "react-hot-toast";

export const CardComponent = ({ CardItem }) => {
    const {
        user,
        setUser
    } = useMeState();

    const addToCartClick = (goodId) => {
        if (!user) {
            toast("Для добавления в корзину - авторизуйтесь");
        }
        addToCart(goodId, user.id).then(res => {
            if (res.data.done) {
                setUser(prev => {
                    const exist = prev.cart.Rows.find(e => e.good_id === goodId);
                    if (exist) {
                        exist.count++;
                    } else {
                        prev.cart.Rows.push({ id: new Date().valueOf(), good: CardItem });
                    }

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
                        prev.favourites.Rows.push({id: new Date().valueOf(), good: CardItem});

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
                        prev.favourites.Rows = prev.favourites.Rows.filter(e => e.good_id !== goodId);

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
            <div className={styles.body}>
                <span className={styles.price}>{CardItem.price}₽</span>
                <div className={styles.footer}>
                    <div className={styles.typebrand}>
                        <span className={styles.type}>{CardItem.title}</span>
                        <span className={styles.brand}>{"бренд"}</span>
                    </div>
                    <div className={styles.buts}>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

