import React from "react";
import styles from "./hpcb.module.css";

export const CatalogueButtons = () => {
    return (
        <div className={styles.container}>
            <button className={styles.buttons}>
                <div className={styles.image} id={styles.sneakers}/>
                <span className={styles.text}>Кроссовки</span>
            </button>
            <button className={styles.buttons}>
                <div className={styles.image} id={styles.gumshoes}/>
                <span className={styles.text}>Кеды</span>
            </button>
            <button className={styles.buttons}>
                <div className={styles.image} id={styles.slates}/>
                <span className={styles.text}>Сланцы</span>
            </button>
            <button className={styles.buttons}>
                <div className={styles.image} id={styles.socks}/>
                <span className={styles.text}>Аксессуары</span>
            </button>
            {/* <div className={styles.sneakers}>

            </div>
            <div className={styles.gumshoes}>

            </div>
            <div className={styles.slates}>

            </div>
            <div className={styles.socks}>

            </div> */}
        </div>
    );
};
