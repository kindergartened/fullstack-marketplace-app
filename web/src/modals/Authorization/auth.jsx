import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import styles from "./auth.module.css";
import {login, register} from "../../api/api";
import {useMeState} from "../../hooks/state";

export const Auth = ({active, setActive}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [form, setForm] = useState({email: "", password: "", name: ""});
    const me = useMeState();

    function switchIsAuth () {
        setIsAuth(prev => !prev);
    }

    function onPasswordChanged ($event) {
        setForm(prev => {
            return {...prev, password: $event.target.value};
        });
    }

    function onNameChanged ($event) {
        setForm(prev => {
            return {...prev, name: $event.target.value};
        });
    }

    function onEmailChanged ($event) {
        setForm(prev => {
            return {...prev, email: $event.target.value};
        });
    }

    function submit ($event) {
        $event.preventDefault();
        if (isAuth) {
            login(form.email, form.password).then(res => {
                setActive(false);
                me.setUser(res.data);
            });
        } else {
            register(form.name, form.email, form.password).then(res => {
                setActive(false);
                me.setUser(res.data);
            });
        }
    }

    return isAuth
        ? <Modal className={styles.authoriz} onHide={setActive} show={active}>
            <Modal.Header closeButton className={styles.header}>
                <span className={styles.headtxt}>Авторизация</span>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submit}>
                    <Form.Group className={styles.formground}>
                        <Form.Label className={styles.formtxt}>Логин</Form.Label>
                        <Form.Control onChange={onEmailChanged} className={styles.formcontr} type="email"
                            placeholder="Введите адрес электронной почты"/>
                    </Form.Group>
                    <Form.Group className={styles.formground}>
                        <Form.Label className={styles.formtxt}>Пароль</Form.Label>
                        <Form.Control onChange={onPasswordChanged} className={styles.formcontr} type="password"
                            placeholder="Введите пароль"/>
                    </Form.Group>
                    <Form.Group className={styles.formground}>
                        <Form.Text className={styles.is_auth} onClick={switchIsAuth}>Зарегистрироваться</Form.Text>
                    </Form.Group>
                    <Button className={styles.formbut} variant="primary" type="submit">
                        <span>Войти</span>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
        : <Modal className={styles.authoriz} onHide={setActive} show={active}>
            <Modal.Header closeButton className={styles.header}>
                <span className={styles.headtxt}>Регистрация</span>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submit}>
                    <Form.Group className={styles.formground}>
                        <Form.Label className={styles.formtxt}>Ваше имя</Form.Label>
                        <Form.Control onChange={onNameChanged} className={styles.formcontr} type="text"
                            placeholder="Введите имя"/>
                    </Form.Group>
                    <Form.Group className={styles.formground}>
                        <Form.Label className={styles.formtxt}>Логин</Form.Label>
                        <Form.Control onChange={onEmailChanged} className={styles.formcontr} type="email"
                            placeholder="Введите адрес электронной почты"/>
                    </Form.Group>
                    <Form.Group className={styles.formground}>
                        <Form.Label className={styles.formtxt}>Пароль</Form.Label>
                        <Form.Control onChange={onPasswordChanged} className={styles.formcontr} type="password"
                            placeholder="Введите пароль"/>
                    </Form.Group>
                    <Form.Group className={styles.formground}>
                        <Form.Text className={styles.is_auth} onClick={switchIsAuth}>Авторизоваться</Form.Text>
                    </Form.Group>
                    <Button className={styles.formbut} variant="primary" type="submit">
                        <span>Зарегистрироваться</span>
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>;
};
