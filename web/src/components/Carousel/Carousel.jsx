import React, {useCallback, useState} from 'react';
import styles from './Carousel.module.css'
import {HiMiniArrowSmallRight, HiMiniArrowSmallLeft} from "react-icons/hi2";


export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }, [data.length, slide])

    // TODO: доделайте пж
    // useEffect(() => {
    //     setTimeout(() => {
    //         nextSlide();
    //     }, 5000);
    // }, [data, nextSlide]);

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.arrow_container + " " + styles.arrow_container_left} onClick={prevSlide}>
                <HiMiniArrowSmallLeft className={styles.arrow}/>
            </div>
            {data.map((item, index) => {
                return <img src={item.src} alt={item.alt} key={index}
                            className={slide === index ? styles.slide : styles.slide + " " + styles.slideHiden}/>
            })}
            <div className={styles.arrow_container + " " + styles.arrow_container_right} onClick={nextSlide}>
                <HiMiniArrowSmallRight className={styles.arrow}/>
            </div>
            <span className={styles.carousel_indicators}>
                {data.map((_, index) => {
                    return <button key={index} onClick={() => setSlide(index)}
                                   className={styles.indicator + " " + (slide === index ? "" : styles.indicator_inactive)}></button>
                })}
            </span>
        </div>
    );
};

export default Carousel;