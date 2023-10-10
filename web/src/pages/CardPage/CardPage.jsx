import React, {useState} from "react";
import styles from "./CardPage.module.css";
import CardComponent from "../../components/CardList/Card/card";


const CardPage = () => {

    return (
        <div>
            <CardComponent CardItem={{id: '1', head: 'Кросовка Рита', price: '300р'}}/>
        </div>
    )
}

export default CardPage;