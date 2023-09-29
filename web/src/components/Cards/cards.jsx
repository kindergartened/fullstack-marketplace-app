import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './cards.module.css';
function Cards(){
    return(
        <div>
            <Card className={styles.card}>
                <Card.Img className={styles.image} variant="top" src="https://a.allegroimg.com/s1024/0ca2b9/7394c97f4afba79442da19512e0a" />
                <Card.Body className={styles.body}>
                    <Card.Title className={styles.title}>100 ₽</Card.Title>
                    <Card.Text className={styles.Text}>Кроссовка Рита</Card.Text>    
                </Card.Body>
                    <Card.Footer className={styles.footer}>
                        <button  className={styles.addtofav + " "+styles.buts}/>
                        <button className={styles.addtocard + " "+styles.buts}/>
                    </Card.Footer>
            </Card>
        </div>
    );
};
export default Cards;