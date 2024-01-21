import React from "react";
import styles from "./nab.module.css";

export const Nab = () => {
    return (
        <div className={styles.nab}>
            <div className={styles.text}>
                <span className={styles.newadi}>Новинки ADIDAS</span><br/>
                <span className={styles.startsells}>Уже в продаже</span>
            </div>
            <div>
                <button className={styles.button}>Приобрести</button>
            </div>
        </div>
    );
};