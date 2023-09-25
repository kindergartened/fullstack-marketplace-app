import React from 'react';
import styles from "./Menu.module.css";
import {CloseButton} from "react-bootstrap";

const Menu = (isShow, setShowMenu) => {
    const items = [{value: "Главная", href: ""}, {value: "Контакты", href: ""},
        {value: "Мы на карте", href: ""},{value: "О нас", href: ""}]
    return (
        <div className={styles.menu + " "+(isShow ? styles.showMenuAnimation : "")}>
            <div className={styles.blur}/>
            <div className={styles.menu_content} onClick={e => e.stopPropagation()}>
                <div className={styles.menu_header}></div>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;