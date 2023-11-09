import React, {useState, useEffect} from "react";
import {Navbar,FavouritesList}  from "../../components";
import styles from "./FavouritesPage.module.css";

export const FavouritesPage = () => {
    const [favourites,setFavourites] = useState([{
        Title: "Boobtsi",
        Description: "Otlishnie boobtsi",
        Price: "mnoga deneg (100 rubley)"
    }]); 
    
    return (
        <div>
            <Navbar/>
            {favourites.length !== 0
                ?
                <div className={styles.querryDisplayContainer}>Тут находятся ваши любимые товары</div>
                : <div className={styles.querryDisplay}>Тут пока что ничего нет :&#40;</div>
            }
            <div>
                <FavouritesList favourites = {favourites}/>
            </div>
        </div>
    );
};
