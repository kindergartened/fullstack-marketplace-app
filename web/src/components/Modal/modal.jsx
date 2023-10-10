import React from 'react';
import styles from './modal.module.css'
import {Modal} from "react-bootstrap";

export const ModalImgComponent = ({active, setActive}) => {
    return (
        <Modal onHide={setActive} show={active} size="lg">
            <Modal.Header closeButton/>
            <Modal.Body>
                <div className={styles.modal_content} onClick={e => e.stopPropagation()}/>
            </Modal.Body>
        </Modal>
    );
};

