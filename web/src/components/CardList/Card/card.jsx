import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css';
 import {AiOutlineHeart} from "react-icons/ai";
 import {BsCartPlus} from "react-icons/bs";
 import { addToCart, addToFav } from '../../../api/api';

export const CardComponent = ({ CardItem }) => {
     const Favourite = () =>{


     }
     const Cart = () =>{
        
     }
    return (
        // <Card className={styles.container}>
        //     <Card.Img className={styles.image} variant="top" src={CardItem.img_url}/>
        //     <Card.Body className={styles.body}>
        //     <Card.Title className={styles.type+" "+styles.brand}>{CardItem.title}</Card.Title>
        //     <Card.Text className={styles.price}>{CardItem.price}</Card.Text>
        //     </Card.Body>
        //     <Card.Footer >
        //         <AiOutlineHeart onClick={Favourite(CardItem.id)} className={styles.heart}/>
        //         <BsCartPlus onClick={Cart(CardItem.id)} className={styles.buts}/>
        //     </Card.Footer>
        // </Card> 
        <div className={styles.container}>
            <img className={styles.image} src={CardItem.img_url}/>
            <div className={styles.body}>
                <span className={styles.type}>{CardItem.title}</span>
                <span className={styles.price}>{CardItem.price}</span>
            </div>
            <div>
                <AiOutlineHeart onClick={Favourite(CardItem.id)} className={styles.heart}/>
                <BsCartPlus onClick={Cart(CardItem.id)} className={styles.cart}/>
            </div>  
        </div>
    );
};

