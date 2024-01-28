import React from "react";
import {CardComponent} from "../../components/CardList/Card/card";

export const CardPage = () => {
    return (
        <div className="h-100">
            <CardComponent CardItem={{id: "1", head: "Кросовка Рита", price: "300р",img_url:"https://outmaxshop.ru/components/com_jshopping/files/img_products/37953/nike-air-force-1-low-x-tiffany-37953-1.jpg"}}/>
        </div>
    );
};