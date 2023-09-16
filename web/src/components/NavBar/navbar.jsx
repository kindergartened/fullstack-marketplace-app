import React from 'react';
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <span className={styles.navtext}>SNEAKERS SHOP</span>
                <div className={styles.navbut}>
                    <button className={styles.buts} id={styles['search']}/>
                    <button className={styles.buts} id={styles['favourites']}/>
                    <button className={styles.buts} id={styles['cart']}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;