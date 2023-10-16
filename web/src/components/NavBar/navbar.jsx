import React, {useState} from 'react';
import styles from "./navbar.module.css";
import {SearchBox} from "./SearchBox/SearchBox";

export const Navbar = ({ setShowMenu, setAuActive }) => {
    const [showSearch, setShowSearch] = useState(false);

    function onSearchBoxChanged(e) {
        console.log(e);
    }

    function hrefto(address){
        window.location.href = address;
    }
    console.log(setAuActive);
    return (
        <div id = "navbar">
            <div className={styles.navbar}>
                <div className={styles.catalog}>
                    <button onClick={() => setShowMenu(prev => !prev)} className={styles.buts} id={styles['catalog']}/>
                </div>
                <span className={styles.navtext}>SNEAKERS SHOP</span>
                <div className={styles.navbut}>
                    {showSearch ? <SearchBox onChanged={onSearchBoxChanged}/> : null}
                    <button onClick={() => setShowSearch(prev => !prev)} className={styles.buts} id={styles['search']}/>
                    <button className={styles.buts} id={styles['favourites']}/>
                    <a href="cart"><button className={styles.buts} id={styles['cart']}/></a>
                    <button onClick={()=> setAuActive(prev=>!prev)}className={styles.buts} id={styles['profile']}/>
                </div>
            </div>
        </div>
    );
};
