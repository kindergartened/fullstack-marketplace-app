import React from 'react';
import styles from './footer.module.css'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube} from "react-icons/ai";
import {SlSocialVkontakte} from "react-icons/sl";

const abouttext ="Наша компания была основана более 10 лет назад и с тех пор мы зарекомендовали себя как надежный партнер для всех любителей удобной обуви. Мы предлагаем широкий выбор качественных кроссовок от известных брендов, таких как Nike, Adidas, Puma и многих других.\n" +
    "Мы заботимся о наших клиентах и стремимся предоставить им лучший сервис. Наша команда профессиональных консультантов всегда готова помочь вам выбрать подходящую пару кроссовок, а также ответить на все ваши вопросы.\n" +
    "Кроме того, мы постоянно следим за модными тенденциями и обновляем свой ассортимент, чтобы наши клиенты могли быть уверены в том, что они выбирают самые актуальные модели.\n" +
    "Не упустите возможность приобрести качественные кроссовки от лучших производителей со скидкой или бесплатной доставкой. Посетите наш сайт прямо сейчас и убедитесь в нашем профессионализме и качестве обслуживания!";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <a>Мы в соц.сетях: </a>
                <div className={styles.buts}>
                    <AiOutlineYoutube />
                    <SlSocialVkontakte />
                    <AiOutlineInstagram />
                    <AiOutlineFacebook />
                </div>
            </div>
            <div className={styles.about}>
                <span className={styles.abouttitle}>О нас</span>
                <span className={styles.abouttxt}>{abouttext}</span>
            </div>
            <div className={styles.map}>
                <a>Мы на карте</a>
                <iframe className={styles.yamap} src="https://yandex.ru/map-widget/v1/?ll=35.912908%2C56.856274&mode=poi&poi%5Bpoint%5D=35.909491%2C56.857224&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D2163878395&z=16.64" width="400" height="250" ></iframe>
            </div>
            <div className={styles.nav}>

            </div>
            <div className={styles.copyright}>
                <span>@2022-2023 права БУ БУ БУ защищены чо?</span>
            </div>
        </div>
    );
};

export default Footer;