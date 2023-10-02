import {CardComponent} from "./Card/card";

export const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map(e => (
                <CardComponent card={e} key={e.id}></CardComponent>
            ))}
        </div>
    )
}
