import React from 'react';
import styles from './modal.module.css'

export const Modal = ({active,setActive}) => {
    return (
        <div className={active ? styles.modal_active : styles.modal} onClick={()=> setActive(false)}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
            </div>
        </div>
    );
};

