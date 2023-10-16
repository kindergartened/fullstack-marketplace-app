import React from 'react';
import styles from './cart.module.css';

export const Cart = () => {
    const goods = [{id:"1", name: "Puma X-Ray Speed", img:"https://static.cdek.shopping/images/shopping/d3365ef50aca4aed9a5dedeb7a5eaddd.jpeg", price:"9 990"},
    {id:"2", name: "Adidas Ozweego", img:"https://static.cdek.shopping/images/shopping/010edbb6bc6b446e8b8b766444cdee9e.jpeg", price:"13 990"},
    {id:"3", name: "Nike Air Max 90", img:"https://cdn.urbanvibes.com/upload/mdm/media_content/resize/54d/1000_1000_1bce/80031370299.jpg", price:"14 990"}]

    return (
        <div >
            <div className={styles.header}>
                <span>Корзина товаров</span>
            </div>
            <div className={styles.cartparam}>

            </div>
            <div className={styles.cart}>
                {goods.map(item =>
                    <div className={styles.cartitem}key={item.id}>
                        <img className={styles.goodcartimg}src={item.img}/>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
