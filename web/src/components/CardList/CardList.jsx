import CardComponent from "./Card/card";

export const CardList = ({ goods }) => {
    return (
        goods.map(e => (
            <CardComponent CardItem={e} key={e.id}></CardComponent>
        ))
    )
}