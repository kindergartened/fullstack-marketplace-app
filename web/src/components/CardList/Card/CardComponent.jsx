import styles from "./CardComponent.module.css";
import {AiOutlineHeart} from "react-icons/ai";
import {LiaCartArrowDownSolid} from "react-icons/lia";
import { addToCart } from "../../../api";
import { useMeState } from "../../../hooks/state";
import toast from "react-hot-toast";

export const CardComponent = ({ CardItem }) => {
    const {user, setUser} = useMeState();

    const addToCartClick = (goodId) => {
        if (!user) {
            toast("Для добавления в корзину - авторизуйтесь");
        }
        addToCart(goodId, user.id).then(_ => {
            setUser(prev => {
                return {
                    ...prev,
                    cart: {
                        Rows: [...prev.cart.Rows, CardItem],
                    }
                };
            });
            toast(`Товар "${CardItem.title}" добавлен в корзину`);
        });
    };

    const addToFavouritesClick = () => {};

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
                        <AiOutlineHeart onClick={addToFavouritesClick} className={styles.heart}/>
                        <LiaCartArrowDownSolid onClick={() => addToCartClick(CardItem.id)} className={styles.cart}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

