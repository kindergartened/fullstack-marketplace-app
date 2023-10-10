import React, {useState} from 'react';
import styles from "./navbar.module.css";
import SearchBox from "./SearchBox/SearchBox";
import {Link} from "react-router-dom"

export const Navbar = ({ setShowMenu, setAuActive }) => {
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div id = "navbar">
            <div className={styles.navbar}>
                <div className={styles.catalog}>
                    <button onClick={() => setShowMenu(prev => !prev)} className={styles.buts} id={styles['catalog']}/>
                </div>
                <Link to="/"><span className={styles.navtext}>SNEAKERS SHOP</span></Link>
                <div className={styles.navbut}>
                    {showSearch ? <SearchBox/> : null}
                    <button onClick={() => setShowSearch(prev => !prev)} className={styles.buts} id={styles['search']}/>
                    <Link to="/favourites"><button className={styles.buts} id={styles['favourites']}/></Link>
                    <Link to="/cart">
                        <button className={styles.buts} id={styles['cart']}/>
                    </Link>
                    <button onClick={()=> setAuActive(prev=>!prev)}className={styles.buts} id={styles['profile']}/>
                </div>
            </div>
        </div>
    );
};
