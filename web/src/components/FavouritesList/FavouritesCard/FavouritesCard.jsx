import React from "react";
import styles from "./FavouritesCard.module.css";
import {AiOutlineHeart} from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useMeState } from "../../../hooks/state";

const FavouritesCard = ({FavouriteItem}) => {
    // const xd = useMeState();
    function addToCart () {

    }
    function addToFavourite () {
    // addToFav(xd.user,)
    }
    return (
        <Card className={styles.container}>
            <Card.Body className={styles.Body}>
                <Row>
                    <Col>
                        <Card.Title>{FavouriteItem.Title}</Card.Title>
                        <Card.Text className={styles.PriceText+" "+styles.Rub}>{FavouriteItem.Price}</Card.Text>
                        <Card.Text className={styles.DescriptionText}>{FavouriteItem.Description}</Card.Text>
                        <AiOutlineHeart onClick={() => addToFavourite()} className={styles.buts}/>
                        <BsCartPlus onClick={() => addToCart()} className={styles.buts}/>
                    </Col>
                    <Col sm={6} class="text-left">
                        <img className={styles.img} src={FavouriteItem.Img_url} />
                    </Col>

                </Row>
            </Card.Body>
        </Card> 
    );
};

export default FavouritesCard;
