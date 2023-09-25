import React, {useState} from 'react';
import styles from "./navbar.module.css";
import SearchBox from "./SearchBox/SearchBox";
import Menu from "./Menu/Menu";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function onSearchBoxChanged(e) {
        console.log(e);
    }

    return (
        <div>
            <Menu isShow={showMenu} setShowMenu={setShowMenu}></Menu>

            <div className={styles.navbar}>
                <div className={styles.catalog}>
                    <button onClick={() => setShowMenu(prev => !prev)} className={styles.buts} id={styles['catalog']}/>
                </div>
                <span className={styles.navtext}>SNEAKERS SHOP</span>
                <div className={styles.navbut}>
                    {showSearch ? <SearchBox onChanged={onSearchBoxChanged}/> : null}
                    <button onClick={() => setShowSearch(prev => !prev)} className={styles.buts} id={styles['search']}/>
                    <button className={styles.buts} id={styles['favourites']}/>
                    <button className={styles.buts} id={styles['cart']}/>
                    <button className={styles.buts} id={styles['profile']}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;