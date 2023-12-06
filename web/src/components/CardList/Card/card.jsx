import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css';
import {AiOutlineHeart} from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";
import { addToCart, addToFav } from '../../../api/api';

const CardComponent = ({ CardItem }) => {
    const Favourite = () =>{

    }
    const Cart = () =>{
        
    }
    return (
        <Card className={styles.card}>
            <Card.Img className={styles.image} variant="top" src={CardItem.img_url}/>
            <Card.Body className={styles.body}>
                <Card.Title className={styles.title}>{CardItem.title}</Card.Title>
                <Card.Text className={styles.Text}>{CardItem.price}</Card.Text>
            </Card.Body>
            <Card.Footer className={styles.footer}>
                <AiOutlineHeart onClick={Favourite(CardItem.id)} className={styles.buts}/>
                <BsCartPlus onClick={Cart(CardItem.id)} className={styles.buts}/>
            </Card.Footer>
        </Card>
    );
};
export default CardComponent;