import React from "react";
import styles from "./SearchPage.module.css";
import Navbar from "../../components/NavBar/navbar";
import SelectFilter from "../../components/SelectFilter/SelectFilter";

const SearchPage = () => {
    const searchQuerry = "ZALUPKA";
    const goodies = [
        {element: "1"},
        {element: "2"},
        {element: "3"},
    ];

    return (
        <div>
            <Navbar/>
            {goodies.length!==0
                    ? <div>
                        <div className={styles.querryDisplay}>По запросу <strong>{searchQuerry}</strong> найдено {goodies.length} товаров</div>
                        <div>
                            <div>
                                <SelectFilter className={styles.selector}></SelectFilter>
                            </div>
                        </div>
                    </div>
                    : <div className={styles.querryDisplay}>По запросу {searchQuerry} ничего не найдено</div>
                }
        </div>
    )
}

export default SearchPage;