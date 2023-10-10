import React from "react";
import styles from "./Page404.module.css";
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <Link to="/">
            <div className={styles.page_404}>
                <h1>Страница не найдена 😢</h1>
            </div>
        </Link>
    )
}

export default Page404;