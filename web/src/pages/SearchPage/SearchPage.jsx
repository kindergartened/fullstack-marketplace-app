import React, {useState, useEffect} from "react";
import styles from "./SearchPage.module.css";
import {SelectFilter} from "../../components/SelectFilter/SelectFilter";
import {GoodsList} from "../../components";
import {getGoods} from "../../api/api";
import {useLocation} from "react-router-dom";

export const SearchPage = () => {
    const [goods, setGoods] = useState([]);
    const location = useLocation();
    const searchQuery = location.state.text;
    const [selectedSort, setSelectedSort] = useState("");

    useEffect(() => {
        getGoods().then((res) => {
            setGoods(res.data);
        });
    }, []);
    const sortGoods = (sort) => {
        setSelectedSort(sort);
        switch (sort) {
        case "popular":
        // добавте в бд счётчик лайков/отзывов/оценок w/e, мне впадлу
            break;
        case "price_asc":
            setGoods([...goods].sort((a, b) => a.price > b.price ? 1 : -1));
            break;
        case "price_desc":
            setGoods([...goods].sort((a, b) => a.price < b.price ? 1 : -1));
            break;
        }
    };

    return (
        <div>
            {goods.filter(item => item.title.includes(searchQuery)).length !== 0
                ? <div className="h-100">
                    <div className={styles.querryDisplayContainer}>
                        <div className={styles.querryDisplay}>
                            По
                            запросу <strong>{searchQuery}</strong> найдено {goods.filter(item => item.title.includes(searchQuery)).length} товаров
                        </div>
                        <div>
                            <SelectFilter
                                value={selectedSort}
                                onChange={sortGoods}
                            />
                        </div>
                    </div>
                    <div className={styles.cardListContainer}>
                        <GoodsList goods={goods.filter(item => item.title.includes(searchQuery))}/>
                    </div>
                </div>
                : <div className={styles.querryDisplay + " h-100"}>По запросу {searchQuery} ничего не найдено</div>
            }
        </div>
    );
};
