import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css';
import {AiOutlineHeart} from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";

export function CardComponent({CardItem}) {

    function addToCart() {
    }

    function addToFavourite() {
    }

    return (
        <div>
            <Card className={styles.card}>
                <Card.Img className={styles.image} variant="top"
                          src="https://a.allegroimg.com/s1024/0ca2b9/7394c97f4afba79442da19512e0a"/>
                <Card.Body className={styles.body}>
                    <Card.Title className={styles.title}>{CardItem.head}</Card.Title>
                    <Card.Text className={styles.Text}>{CardItem.price}</Card.Text>
                </Card.Body>
                <Card.Footer className={styles.footer}>
                    <AiOutlineHeart onClick={addToFavourite} className={styles.buts}/>
                    <BsCartPlus onClick={addToCart} className={styles.buts}/>
                </Card.Footer>
            </Card>
        </div>
    );
};
export default CardComponent;