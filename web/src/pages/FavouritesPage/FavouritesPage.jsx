import React, {useState, useEffect} from "react";
import {FavouritesList} from "../../components";
import styles from "./FavouritesPage.module.css";
import {useMeState} from "../../hooks/state";
import {queryMyFavourites} from "../../api/api";

export const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([{
        Title: "Boobtsi",
        Description: "Otlishnie boobtsi",
        Price: "mnoga deneg (100 rubley)"
    }, {
        Title: "Boobtsi",
        Description: "Otlishnie boobtsi",
        Price: "mnoga deneg (100 rubley)"
    }, {
        Title: "Boobtsi",
        Description: "Otlishnie boobtsi",
        Price: "mnoga deneg (100 rubley)"
    }, {
        Title: "Boobtsi",
        Description: "Otlishnie boobtsi",
        Price: "mnoga deneg (100 rubley)"
    }, {
        Title: "Boobtsi",
        Description: "Otlishnie boobtsi",
        Price: "mnoga deneg (100 rubley)"
    }]);
    const xd = useMeState();
    useEffect(() => {
        queryMyFavourites(xd.user).then((res) => {
            setFavourites(res.data.Rows);
        }).catch(err => {
            console.log({message: "Ошибка во время получения избранных товаров.", err: err.message, done: false});
        });
    }, []);
    return xd.user
        ?
        <div>
            <div className={styles.page}>
                <div className={styles.rectangle}>
                    <div className={styles.textbox}>
                        <span className={styles.text}>ПОКУПАЙ ВЫГОДНО У НАС!</span>
                    </div>
                </div>
            </div>
            {favourites.length !== 0
                ? <div className={styles.querryDisplayContainer}>Тут находятся ваши любимые товары</div>
                : <div className={styles.querryDisplay + " w-100 text-center"}>
                    <span>Тут пока что ничего нет :&#40;</span>
                </div>
            }
            <div>
                <FavouritesList favourites={favourites}/>
            </div>
        </div>
        :
        <div>
            <div className={styles.page}>
                <div className={styles.rectangle}>
                    <div className={styles.textbox}>
                        <span className={styles.text}>ПОКУПАЙ ВЫГОДНО У НАС!</span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4 mb-4 w-100">
                <span>Авторизируйтесь, чтоб посмотреть избранное</span>
            </div>
        </div>
    ;
};
