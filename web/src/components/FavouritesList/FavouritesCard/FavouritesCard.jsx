import React from 'react';
import styles from './FavouritesCard.module.css';
import {AiOutlineHeart} from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FavouritesCard = ({FavouriteItem}) => {
    
    function addToCart() {}
    function addToFavourite() {}
    return (
    <Row>
        <Col sm={6}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col sm={6}>
                            <Card.Title>{FavouriteItem.Title}</Card.Title>
                            <Card.Text>{FavouriteItem.Description}</Card.Text>
                            <Card.Text>{FavouriteItem.Price}</Card.Text>
                            <AiOutlineHeart onClick={addToFavourite} className={styles.buts}/>
                            <BsCartPlus onClick={addToCart} className={styles.buts}/>
                        </Col>
                        <Col sm={6} class="text-left">
                            <img class="" src="//placehold.it/200" alt="sans" width="200px"/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  );
};

export default FavouritesCard;