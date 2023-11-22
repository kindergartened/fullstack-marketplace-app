import React, {useState} from "react";
import styles from "./CardPage.module.css";
import CardComponent from "../../components/CardList/Card/card";


export const CardPage = () => {

    return (
        <div className="h-100">
            <CardComponent CardItem={{id: '1', head: 'Кросовка Рита', price: '300р'}}/>
        </div>
    )
}