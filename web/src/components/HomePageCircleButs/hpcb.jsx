import React from "react";
import styles from "./hpcb.module.css";

export const Hpcb = () => {
    return (
        <div className={styles.container}>
            <button className={styles.buttons}>
                    <div className={styles.image} id={styles.sneakers}/>
                    <span>Кроссовки</span>
                </button>
                <button className={styles.buttons}>
                    <div className={styles.image} id={styles.gumshoes}/>
                    <span>Кеды</span>
                </button>
                <button className={styles.buttons}>
                    <div className={styles.image} id={styles.slates}/>
                    <span>Сланцы</span>
                </button>
                <button className={styles.buttons}>
                    <div className={styles.image} id={styles.socks}/>
                    <span>Аксессуары</span>
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