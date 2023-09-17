import React from 'react';
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <span className={styles.navtext}>SNEAKERS SHOP</span>
                <div className={styles.catalog}>
                    <button className={styles.buts} id={styles['catalog']}/>
                </div>
                <div className={styles.navbut}>
                    <button className={styles.buts} id={styles['favourites']}/>
                    <button className={styles.buts} id={styles['cart']}/>
                    <button className={styles.buts} id={styles['profile']}/>
                </div>
                <div className={styles.searchbut}>
                    <form className={styles.searchform} action="#">
                        <input type="text" placeholder="кеды puma" id={styles['stext']}/>
                        <button className={styles.buts} id={styles['search']}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navbar;