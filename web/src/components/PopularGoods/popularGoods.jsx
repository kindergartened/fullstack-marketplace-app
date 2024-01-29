import React from "react";
import styles from "./popularGoods.module.css";
import {CardComponent} from "../CardList/Card/card";

export const PopularGoods = () => {
    return (
        <div>
            <div className={styles.text}>
                <span>Популярно сейчас</span>
            </div>
            <div className={styles.container}>
                <CardComponent CardItem={{id: "1", head: "Кросовка nike",  price: "10 900р",img_url:"https://a.lmcdn.ru/img600x866/M/P/MP002XM12G3E_21977738_2_v1.jpg"}}/>
                <CardComponent CardItem={{id: "1", head: "Кросовка nike",  price: "10 900р",img_url:"https://a.lmcdn.ru/img600x866/M/P/MP002XM12G3E_21977738_2_v1.jpg"}}/>
                <CardComponent CardItem={{id: "1", head: "Кросовка nike",  price: "10 900р",img_url:"https://a.lmcdn.ru/img600x866/M/P/MP002XM12G3E_21977738_2_v1.jpg"}}/>
                <CardComponent CardItem={{id: "1", head: "Кросовка nike",  price: "10 900р",img_url:"https://a.lmcdn.ru/img600x866/M/P/MP002XM12G3E_21977738_2_v1.jpg"}}/>
            </div>
        </div>
    );
};