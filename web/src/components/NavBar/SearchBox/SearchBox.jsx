import React from 'react';
import styles from "./SearchBox.module.css";

export const SearchBox = ({onChanged}) => {

    return (
        <div className={styles.search_container}>
            <input onChange={event => onChanged(event.target.value)} placeholder="Кеды пума..." className={styles.search_container_input}/>
        </div>
    );
};
