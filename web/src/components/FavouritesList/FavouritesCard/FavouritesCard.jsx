import React from "react";
import styles from "./FavouritesCard.module.css";
import {AiOutlineHeart} from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardHorizontal } from "../../CardList/CardHorizontal/CardHorizontal";

const FavouritesCard = ({FavouriteItem}) => {
    return (
        <CardHorizontal IsCart={false} CardItem={FavouriteItem.good}/>
    );
};

export default FavouritesCard;
