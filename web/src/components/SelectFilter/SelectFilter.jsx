import React from 'react';
import styles from './SelectFilter.module.css'
import { Form } from 'react-bootstrap';

export const SelectFilter = ({value, onChange}) => {
    return (
        <Form.Select
         className={styles.selector}
         value={value}
         onChange={event=>onChange(event.target.value)}
        >
            <option value="popular">Популярное</option>
            <option value="price_asc">Сначала дешёвые</option>
            <option value="price_desc">Сначала дорогие</option>
        </Form.Select>  
    );
};