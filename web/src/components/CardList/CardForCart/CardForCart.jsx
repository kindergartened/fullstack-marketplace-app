import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './CardForCart.css';
import {AiOutlineHeart} from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";
// import { addToCart, addToFav } from '../../../api/api';

export const CardComponentForCart = ({ CardItem }) => {
    const Favourite = () =>{
    }
    
    return (
        // <Card className={styles.container}>
        //     <Card.Img className={styles.image} variant="top" src={CardItem.img_url}/>
        //     <Card.Body className={styles.body}>
        //         <Card.Title className={styles.Title+" "+styles.DescriptionText}>{CardItem.title}</Card.Title>
        //         <Card.Text className={styles.PriceText+" "+styles.Rub}>{CardItem.price}</Card.Text>
        //         <FaRegTrashCan onClick={Favourite(CardItem.id)} className={styles.trash}/>
        //     </Card.Body>
        // </Card>
        <div className={styles.container}>
            <img className={styles.image} src={CardItem.img_url}/>
            <div className={styles.body}>
                <span className={styles.type}>{CardItem.title}</span>
                <span className={styles.price}>{CardItem.price}</span>
            </div>
            <div>
                <FaRegTrashCan onClick={Favourite(CardItem.id)} className={styles.trash}/>
            </div>  
        </div>
    );
};
