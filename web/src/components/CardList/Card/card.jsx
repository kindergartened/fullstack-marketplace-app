import styles from "./card.module.css";
import {AiOutlineHeart} from "react-icons/ai";
import {LiaCartArrowDownSolid} from "react-icons/lia";

export const CardComponent = ({CardItem}) => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={CardItem.img_url}/>
            </div>
            <div className={styles.body}>
                <span className={styles.price}>{CardItem.price}</span>
                <div className={styles.footer}>
                    <div className={styles.typebrand}>
                        <span className={styles.type}>{"CardItem.title"}</span>
                        <span className={styles.brand}>{"CardItem.title"}</span>
                    </div>
                    <div className={styles.buts}>
                        <AiOutlineHeart onClick={Favourite(CardItem.id)} className={styles.heart}/>
                        <LiaCartArrowDownSolid onClick={Cart(CardItem.id)} className={styles.cart}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

