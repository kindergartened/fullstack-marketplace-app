import React, {useEffect, useState} from "react";
import styles from "./popularGoods.module.css";
import {CardComponent} from "../CardList/Card/CardComponent";
import {getGoods} from "../../api";

export const PopularGoods = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getGoods().then(goods => {
            if (goods.data && goods.data.length) {
                setPopular(goods.data.splice(0,4));
            }
        });
    }, [setPopular]);

    return (
        <div>
            <div className={styles.text}>
                <span>Популярно сейчас</span>
            </div>
            <div className={styles.container}>
                {popular.length &&
                    popular.map((item) => (
                        <CardComponent key={item.id} CardItem={item}/>
                    ))
                }
            </div>
        </div>
    );
};
