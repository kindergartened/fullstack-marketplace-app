import React, {useState} from 'react';
import styles from "./SearchBox.module.css";
import {useNavigate} from "react-router-dom";


const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            navigate("/search");
        }
    };

    return (
        <div className={styles.search_container}>
            <input placeholder="Кеды пума..."
                   value={searchQuery}
                   onChange={handleChange}
                   onKeyDown={handleKeyDown}
                   className={styles.search_container_input}
            />
        </div>
    );
};

export default SearchBox;