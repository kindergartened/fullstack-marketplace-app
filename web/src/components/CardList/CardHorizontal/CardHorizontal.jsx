import styles from "./CardHorizontal.module.css";
import {RiDeleteBinLine} from "react-icons/ri";

export const CardHorizontal = ({CardItem}) => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={CardItem.img_url}/>
            </div>
            <div className="d-flex flex-column justify-content-between p-3 w-100">
                <div className={styles.card_header}>
                    <div className={styles.typebrand}>
                        <span className={styles.type}>{"type"}</span>
                        <span className={styles.brand}>{"brand"}</span>
                    </div>
                    <span className={styles.price}>{CardItem.price}</span>
                </div>
                <div className={styles.footer}>
                    <div className={styles.counter}>
                        <button className={styles.counter_btn}
                            onClick="">
                            <i className="fas fa-minus"></i>
                        </button>

                        <span>{0}</span>

                        <button className={styles.counter_btn}
                            onClick="">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <RiDeleteBinLine className={styles.card_del}/>
                </div>
            </div>
        </div>
    );
};

