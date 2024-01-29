import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css';
 import {AiOutlineHeart} from "react-icons/ai";
 import {LiaCartArrowDownSolid} from "react-icons/lia";
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
            <div >
                <img className={styles.image} src={CardItem.img_url}/>
            </div>
            <div className={styles.body}>
                <span className={styles.price}>{CardItem.price}</span>
                <div className={styles.footer}>
                    <div className={styles.typebrand}>
                        <span className={styles.type}>{"CardItem.title"}</span>
                        <span className={styles.brand}>{"CardItem.title"}</span>
                    </div>
                    <div className={styles.buts}>
                        <AiOutlineHeart onClick={Favourite(CardItem.id)} className={styles.heart}/>
                        <LiaCartArrowDownSolid onClick={Cart(CardItem.id)} className={styles.cart}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

