import React from "react";
import styles from "./footer.module.css";
import {AiOutlineYoutube} from "react-icons/ai";
import {BiBook} from "react-icons/bi";


export const Footer = () => {
    return (
        <div id="footer" className={styles.footer}>
            <div className={styles.footer_box}>
                <div className={styles.map}>
                    <span>Мы на карте</span>
                    <iframe className={styles.yamap}
                        src="https://yandex.ru/map-widget/v1/?ll=35.912908%2C56.856274&mode=poi&poi%5Bpoint%5D=35.909491%2C56.857224&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D2163878395&z=16.64"
                        width="650" height="400"></iframe>
                </div>
                {}
            </div>
            <div className={styles.copyright}>
                <span>©2024 Kindergarten Solnishko Group.</span>
                <div className={styles.buts}>
                    <a rel="noreferrer" href="https://www.youtube.com/@vladimirbillig1229" target="_blank">
                        <AiOutlineYoutube className={styles.social_btn}/>
                    </a>
                    <a rel="noreferrer" href="https://vbillig.ru/" target="_blank">
                        <BiBook className={styles.social_btn}/>
                    </a>
                </div>
            </div>
        </div>
    );
};
