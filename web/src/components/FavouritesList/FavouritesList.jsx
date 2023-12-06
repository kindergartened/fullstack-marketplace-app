import FavouritesCard from "./FavouritesCard/FavouritesCard";
import styles from "./FavouritesList.module.css"
export const FavouritesList = ({ favourites }) => {
    return (
        <div className={styles.container}>
            {favourites.map(e => (<FavouritesCard FavouriteItem={e} key={e.id}></FavouritesCard>))}
        </div>
        
    )
}