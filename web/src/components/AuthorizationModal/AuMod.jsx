import React from 'react';
import {Modal, Form, Button} from "react-bootstrap";
import styles from './AuMod.module.css';

export const AuMod = ({active,setActive}) => {
    return (
        <Modal className={styles.authoriz} onHide={setActive} show={active}>
            <Modal.Header closeButton className={styles.header}>
                <span className={styles.headtxt}>Авторизация</span>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className={styles.formground} controlId="formBasicEmail">
                        <Form.Label className={styles.formtxt}>Логин</Form.Label>
                        <Form.Control className={styles.formcontr} type="email" placeholder="Введите адрес электронной почты" />
                    </Form.Group>
                    <Form.Group className={styles.formground} controlId="formBasicPassword">
                        <Form.Label className={styles.formtxt}>Пароль</Form.Label>
                        <Form.Control className={styles.formcontr} type="password" placeholder="Введите пароль" />
                    </Form.Group>
                    <Form.Group className={styles.formground} controlId="formBasicCheckbox">
                        <Form.Check className={styles.check} type="checkbox" label="Запомнить меня" />
                    </Form.Group>
                    <Button className={styles.formbut} variant="primary" type="submit">
                        <span>Войти</span>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};