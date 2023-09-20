import React, {useState} from 'react';
import styles from './Carousel.module.css'
import {HiMiniArrowSmallRight, HiMiniArrowSmallLeft} from "react-icons/hi2";


export const Carousel = ( {data} ) => {
    const [slide,setSlide] = useState(0)

    const nextSlide = () => {
        setSlide( slide===data.length-1 ? 0 : slide+1)
    }

    const prevSlide = () => {
        setSlide(slide===0 ? data.length-1: slide-1)
    }

    return (
        <div className={styles.carousel}>
            <HiMiniArrowSmallLeft className={styles.arrow_left + " " + styles.arrow} onClick={prevSlide}/>
            {data.map((item,index) => {
                return <img src={item.src} alt={item.alt} key={index} className={slide === index ? styles.slide : styles.slide + " " + styles.slideHiden}/>
            })}
            <HiMiniArrowSmallRight className={styles.arrow_right + " " + styles.arrow} onClick={nextSlide}/>
            <span className={styles.carousel_indicators}>
                {data.map((_,index) => {
                return <button key={index} onClick={()=>setSlide(index)} className={styles.indicator + " " + (slide === index ? "" :  styles.indicator_inactive)}></button>
            })}
            </span>
        </div>
    );
};

export default Carousel;