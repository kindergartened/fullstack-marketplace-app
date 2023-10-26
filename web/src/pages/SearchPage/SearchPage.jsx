import React, {useState, useEffect} from "react";
import styles from "./SearchPage.module.css";
import {SelectFilter} from "../../components/SelectFilter/SelectFilter";
import {CardList, Navbar} from "../../components";
import { getGoods } from "../../api/api";
import {useSearchParams} from "react-router-dom";

export const SearchPage = () => {
    const [goods,setGoods] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuerry = searchParams.get("text");
    const [selectedSort, setSelectedSort] = useState('')

    useEffect(()=>{
        getGoods().then((res)=>{setGoods(res.data)});
    },[]);
    
    const sortGoods = (sort) =>{
        setSelectedSort(sort)
        switch(sort){
            case "popular":
                //добавте в бд счётчик лайков/отзывов/оценок w/e, мне впадлу
                break
            case "price_asc":
                setGoods([...goods].sort((a,b)=>a['price']>b['price']?1:-1))
                break
            case "price_desc":
                setGoods([...goods].sort((a,b)=>a['price']<b['price']?1:-1))
                break
        }
    }
    
    return (
        <div>
            <Navbar/>
            {goods.length !== 0
                ?
                <div className={styles.querryDisplayContainer}>
                    <div className={styles.querryDisplay}>
                        По запросу <strong>{searchQuerry}</strong> найдено {goods.filter(item => item.title.includes(searchQuerry)).length} товаров
                    </div>
                    <div>
                        <SelectFilter
                            value={selectedSort}
                            onChange={sortGoods}
                        />   
                    </div>
                </div>
                
                : <div className={styles.querryDisplay}>По запросу {searchQuerry} ничего не найдено</div>
            }
           <div className={styles.cardListContainer}>
                <CardList goods={goods.filter(item => item.title.includes(searchQuerry))}/>
           </div>
        </div>
    )
}