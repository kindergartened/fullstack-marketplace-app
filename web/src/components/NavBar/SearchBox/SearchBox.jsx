import React from 'react';
import styles from "./SearchBox.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";


const SearchBox = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const nav = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const query = form.search.value;
        if (query!=="")
        {
            nav('/search', {state: {text: query}});
        }
    };

    return (
        <div className={styles.search_container}>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input placeholder="Кеды пума..."
                type="search"
                name='search'
                className={styles.search_container_input}
            /></form>
            
        </div>
    );
};

export default SearchBox;