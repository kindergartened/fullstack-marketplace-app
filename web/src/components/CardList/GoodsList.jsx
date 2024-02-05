import {CardComponent} from "./Card/CardComponent";
import styles from "./GoodsList.module.css";

export const GoodsList = ({goods}) => {
    return (
        <div className={styles.container}>
            {goods.map(e => (
                <CardComponent CardItem={e} key={e.id}></CardComponent>
            ))}
        </div>
    );
};
