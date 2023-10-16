import React from 'react';
import styles from "./Menu.module.css";

export const Menu = ({ isShow, setShowMenu }) => {
    const items = [{value: "Главная", href:"#navbar"}, {value: "Контакты", href:""},
        {value: "Мы на карте", href:"#footer"},{value: "О нас", href: ""}];
    const stylesBlur = [styles.blur_container];

    if (isShow) {
        delete stylesBlur[1];
    }

    return (
        <div className={stylesBlur.join(" ") + " " + (isShow ? styles.blur : styles.hide)} onClick={() => {setShowMenu(false);
            stylesBlur.push(styles.blur_container_zindex)}}>
            <div className={styles.menu + " " + (isShow ? styles.showMenuAnimation : styles.hideMenuAnimation)}>
                <div className={styles.menu_content} onClick={e => e.stopPropagation()}>
                    <div className={styles.menu_header}></div>
                    <ul>
                        {items.map(item =>
                            <li key={item.value}>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
