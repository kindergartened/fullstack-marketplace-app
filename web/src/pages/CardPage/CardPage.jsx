import React from "react";
import {CardComponent} from "../../components/CardList/Card/card";

export const CardPage = () => {
    return (
        <div className="h-100">
            <CardComponent CardItem={{id: "1", head: "Кросовка nike",  price: "10 900р",img_url:"https://a.lmcdn.ru/img600x866/M/P/MP002XM12G3E_21977738_2_v1.jpg"}}/>
        </div>
    );
};