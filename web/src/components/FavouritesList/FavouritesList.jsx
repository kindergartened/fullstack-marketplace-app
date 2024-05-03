import FavouritesCard from "./FavouritesCard/FavouritesCard";
import styles from "./FavouritesList.module.css";

export const FavouritesList = ({ favourites }) => {
    return (
        <div className={styles.container}>
            {favourites.map(e =>
                (<div key={e.id} className={styles.fav_item}>
                    <FavouritesCard FavouriteItem={e}></FavouritesCard>
                </div>)
            )}
        </div>
    );
};
