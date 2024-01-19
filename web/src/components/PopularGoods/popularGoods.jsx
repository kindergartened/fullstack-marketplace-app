import React from "react";
import styles from "./popularGoods.module.css";
import {CardComponent} from "../CardList/Card/card";

export const PopularGoods = () => {
    return (
        <div className={styles.container}>
            <CardComponent CardItem={{id: "1", head: "Кросовка Рита", price: "300р"}}/>
            <CardComponent CardItem={{id: "2", head: "Кросовка Рита", price: "300р"}}/>
            <CardComponent CardItem={{id: "3", head: "Кросовка Рита", price: "300р"}}/>
            <CardComponent CardItem={{id: "4", head: "Кросовка Рита", price: "300р"}}/>
        </div>
    );
};