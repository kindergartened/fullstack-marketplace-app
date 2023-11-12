import FavouritesCard from "./FavouritesCard/FavouritesCard";

export const FavouritesList = ({ favourites }) => {
    return (
        favourites.map(e => (
            <FavouritesCard FavouriteItem={e} key={e.id}></FavouritesCard>
        ))
    )
}