import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './CardForCart.css';
import {AiOutlineHeart} from "react-icons/ai";
// import { addToCart, addToFav } from '../../../api/api';

export const CardComponentForCart = ({ CardItem }) => {
    const Favourite = () =>{
    }
    
    return (
        <Card className={styles.card}>
            <Card.Img className={styles.image} variant="top" src={CardItem.img_url}/>
            <Card.Body className={styles.body}>
                <Card.Title className={styles.Title+" "+styles.DescriptionText}>{CardItem.title}</Card.Title>
                <Card.Text className={styles.PriceText+" "+styles.Rub}>{CardItem.price}</Card.Text>
            </Card.Body>
            <Card.Footer className={styles.footer}>
                <AiOutlineHeart onClick={Favourite(CardItem.id)} className={styles.heart}/>
            </Card.Footer> 
        </Card>
    );
};
