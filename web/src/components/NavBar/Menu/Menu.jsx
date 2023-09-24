import React from 'react';
import styles from "./Menu.module.css";
import {CloseButton} from "react-bootstrap";

const Menu = ({ isShow }) => {
    function closeMenu() {
        isShow = !isShow;
    }

    return (
        <div className={styles.menu + " " + (isShow ? styles.showMenuAnimation : "")}>
            <a href="#">Penis</a>
            <a href="#">popa</a>
            <a href="#">huii</a>

            <span onClick={closeMenu}><CloseButton/></span>
        </div>
    );
};

export default Menu;