import React, {useState} from 'react';
import styles from './footer.module.css'
import {AiOutlineYoutube} from "react-icons/ai";
import {SlSocialVkontakte} from "react-icons/sl";

const navbut = [{value: "Главная", href: ""}, {value: "Контакты", href: ""},
    {value: "Мы на карте", href: ""},{value: "О нас", href: ""},{value: "Наше приложение", href: ""}];
const helpbut = [{value: "Мои заказы", href: ""}, {value: "Условия доставки", href: ""},
    {value: "Возврат", href: ""},{value: "Как оформить заказ", href: ""},{value: "Как выбрать размер", href: ""},
    {value: "Частые вопросы", href: ""}];
export const Footer = () => {
    return (
        <div id="footer" className={styles.footer}>
            <div className={styles.footer_box}>
                <div className={styles.map}>
                    <span>Мы на карте</span>
                    <iframe className={styles.yamap}
                            src="https://yandex.ru/map-widget/v1/?ll=35.912908%2C56.856274&mode=poi&poi%5Bpoint%5D=35.909491%2C56.857224&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D2163878395&z=16.64"
                            width="400" height="250"></iframe>
                </div>
                <div className={styles.nav}>
                    <span>Помощь</span>
                    {helpbut.map(helpbut =>
                        <div key={helpbut.value}>
                            <a className={styles.hover_underline_animation} href={helpbut.href}>{helpbut.value}</a>
                        </div>
                    )}
                </div>
                <div className={styles.nav}>
                    <span>Навигация</span>
                    {navbut.map(navbut =>
                        <div key={navbut.value}>
                            <a className={styles.hover_underline_animation} href={navbut.href}>{navbut.value}</a>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.copyright}>
                <span>© 2023 Kindergartened, Inc.</span>
                <div className={styles.buts}>
                    <AiOutlineYoutube className={styles.social_btn}/>
                    <SlSocialVkontakte className={styles.social_btn}/>
                </div>
            </div>
        </div>
    );
};
