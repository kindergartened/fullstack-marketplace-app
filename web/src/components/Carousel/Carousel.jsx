import React, {useState} from "react";
import styles from "./Carousel.module.css";
import {GoChevronLeft, GoChevronRight} from "react-icons/go";

export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const getBannerImg = (i) => {
        return "http://localhost:5000/images/Banner" + i + ".png";
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.arrow_container + " " + styles.arrow_container_left} onClick={prevSlide}>
                <GoChevronLeft className={styles.arrow}/>
            </div>
            {data.map((item, index) => {
                return <img src={getBannerImg(index + 1)} alt={item.alt} key={index}
                    className={slide === index ? styles.slide : styles.slide + " " + styles.slideHiden}/>;
            })}
            <div className={styles.arrow_container + " " + styles.arrow_container_right} onClick={nextSlide}>
                <GoChevronRight className={styles.arrow}/>
            </div>
            <span className={styles.carousel_indicators}>
                {data.map((_, index) => {
                    return <button key={index} onClick={() => setSlide(index)}
                        className={styles.indicator + " " + (slide === index ? "" : styles.indicator_inactive)}></button>;
                })}
            </span>
        </div>
    );
};
