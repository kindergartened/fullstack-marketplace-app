import React, {useState} from 'react';
import styles from "./SearchBox.module.css";
import { Link } from 'react-router-dom';

const SearchBox = () => {
    const [searchQuerry, setSearchQuerry] = useState('');
    const [searchQuerrySubmitted, setUpdated] = useState('');

    const handleChange = (event) => {
        setSearchQuerry(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        event.preventDefault()
        setUpdated(searchQuerry);
        searchRedirect();
        }
    };

    const searchRedirect = () =>{
        return (
            window.location.assign('http://localhost:3000/search')
        )
    }

    return (
        <div className={styles.search_container}>
            <input placeholder="Кеды пума..." 
                value={searchQuerry} 
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={styles.search_container_input}
            />
        </div>
    );
};

export default SearchBox;