import CardComponent from "./Card/card";

const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map(e => (
                <CardComponent card={e} key={e.id}></CardComponent>
            ))}
        </div>
    )
}

export default CardList;