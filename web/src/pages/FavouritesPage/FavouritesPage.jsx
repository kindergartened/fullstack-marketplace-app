import React, {useState} from "react";
import {FavouritesList} from "../../components";
import styles from "./FavouritesPage.module.css";
import { useMeState } from "../../hooks/state";

export const FavouritesPage = () => {
    const {user, setUser} = useMeState();
    return user
        ?
        <div>
            <div className={styles.page}>
                <div className={styles.rectangle}>
                    <div className={styles.textbox}>
                        <span className={styles.text}>ПОКУПАЙ ВЫГОДНО У НАС!</span>
                    </div>
                </div>
            </div>
            {user.favourites.Rows.length !== 0
                ? <div className={styles.querryDisplayContainer}>Тут находятся ваши любимые товары</div>
                : <div className={styles.querryDisplay + " w-100 text-center"}>
                    <span>Тут пока что ничего нет :&#40;</span>
                </div>
            }
            <div className="m-3">
                <FavouritesList favourites={user.favourites.Rows}/>
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
