import React, {useState} from "react";
import styles from "./navbar.module.css";
import {SearchBox} from "./SearchBox/SearchBox";
import {useNavigate} from "react-router-dom";

export const Navbar = ({setShowMenu, setAuActive}) => {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    function onSearchBoxChanged (e) {
        console.log(e);
    }

    return (
        <div id = "navbar">
            <div className={styles.navbar}>
                <div className={styles.catalog}>
                    <button onClick={() => setShowMenu(prev => !prev)} className={styles.buts} id={styles.catalog}/>
                </div>
                <span className={styles.navtext}>CROSSOVKI.SHOP</span>
                <div className="d-flex flex-column">
                    <div className={styles.navbut}>
                        {showSearch ? <SearchBox onChanged={onSearchBoxChanged}/> : null}
                        <button onClick={() => setShowSearch(prev => !prev)} className={styles.buts} id={styles.search}/>
                        <a onClick={() => navigate("/favourites")}><button className={styles.buts} id={styles.favourites}/></a>
                        <a onClick={() => navigate("/cart")}><button className={styles.buts} id={styles.cart}/></a>
                        <button onClick={() => setAuActive(prev => !prev)}className={styles.buts} id={styles.profile}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
