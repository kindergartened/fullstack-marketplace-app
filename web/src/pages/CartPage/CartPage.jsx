import React, {useState} from "react";
import styles from "./CartPage.module.css";
import {CardHorizontal} from "../../components/CardList/CardHorizontal/CardHorizontal";

export const CartPage = () => {
    const [promoApplied, setPromoApplied] = useState(false);

    const applyPromo = () => setPromoApplied(prev => !prev);

    return (
        <div className="h-100 w-100 d-flex justify-content-center">
            <div className="d-flex w-75 mt-3 justify-content-between">
                <div className={"d-flex flex-column pt-3 " + styles.width65}>
                    <span className="fs-4 mb-3">Корзина товаров</span>
                    <CardHorizontal CardItem={{
                        id: "1",
                        head: "Кросовка nike",
                        price: "10 900р",
                        img_url: "https://a.lmcdn.ru/img600x866/M/P/MP002XM12G3E_21977738_2_v1.jpg"
                    }}/>
                </div>
                <div className={styles.side_part + " d-flex flex-column w-25"}>
                    <span className="fs-4">Сумма заказа</span>
                    <span className="pt-2">{2} товара на сумму: <strong>{123123}₽</strong></span>
                    <span className="pt-2">Скидка по промокоду: <strong><span
                        className={styles.sale}>{123123}₽</span></strong></span>
                    <div className={styles.promo}>
                        <input type="text" placeholder="Введите промо" className={styles.promo_input + " " + (promoApplied ? styles.promo_input_active : "")}/>
                        <button onClick={applyPromo}
                            className={styles.promo_submit + " " + (promoApplied ? styles.promo_active : "")}>
                            <strong>{promoApplied ? "Отменить" : "Применить"}</strong></button>
                    </div>
                    <span className={styles.total_price}><strong>Итого: {123123}₽</strong></span>

                    <div className={styles.make_order_container}>
                        <button className={styles.make_order}>
                            <strong>Оформить заказ</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
