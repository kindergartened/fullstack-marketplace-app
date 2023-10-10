import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './AuMod.module.css';

export const AuMod = ({active,setActive}) => {
    console.log();
    return (
        <Modal onHide={setActive} show={active} size="lg">
            <Modal.Header closeButton>Авторизация</Modal.Header>
            <Modal.Body>
                <div onClick={e => e.stopPropagation()}>
                    <span>hdfjhfgjgf</span>
                </div>
            </Modal.Body>
        </Modal>
    );
};