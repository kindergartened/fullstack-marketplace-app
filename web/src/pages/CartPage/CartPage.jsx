import React, { useEffect, useState } from "react";
import styles from "./CartPage.module.css";
import {CardHorizontal} from "../../components/CardList/CardHorizontal/CardHorizontal";
import { useMeState } from "../../hooks/state";

export const CartPage = () => {
    const [promoApplied, setPromoApplied] = useState(false);
    const {user, setUser} = useMeState();
    const [total, setTotal] = useState(0);
    const [sale, setSale] = useState(0);

    useEffect(() => {
        setTotal(user?.cart?.Rows?.reduce((acc, el) => {
            acc += el.good.price;
            return acc;
        }, 0));
    }, []);

    const applyPromo = () => {
        setSale(promoApplied ? 0 : 150);

        setPromoApplied(prev => !prev);
    };

    return (
        <div className="h-100 w-100 d-flex justify-content-center mt-5">
            <div className="d-flex w-75 mt-3 justify-content-between">
                <div className={"d-flex flex-column pt-3 " + styles.width65}>
                    <span className="fs-4 mb-3">Корзина товаров</span>
                    {user?.cart &&
                        (user.cart.Rows.map(e =>
                            <CardHorizontal CardItem={e.good} key={e.id} IsCart={true} CartItem={e}/>
                        ))
                    }
                </div>
                <div className={styles.side_part + " d-flex flex-column w-25"}>
                    <span className="fs-4">Сумма заказа</span>
                    <span className="pt-2">{user?.cart?.Rows?.length ?? 0} товара на сумму: <strong>{total}₽</strong></span>
                    <span className="pt-2">Скидка по промокоду: <strong><span
                        className={styles.sale}>{sale}₽</span></strong></span>
                    <div className={styles.promo}>
                        <input type="text" placeholder="Введите промо" className={styles.promo_input + " " + (promoApplied ? styles.promo_input_active : "")}/>
                        <button onClick={applyPromo}
                            className={styles.promo_submit + " " + (promoApplied ? styles.promo_active : "")}>
                            <strong>{promoApplied ? "Отменить" : "Применить"}</strong></button>
                    </div>
                    <span className={styles.total_price}><strong>Итого: {total - sale}₽</strong></span>

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
