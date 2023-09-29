import Card from "./Card/card";

export const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map(e => (
                <Card card={e} key={e.id}></Card>
            ))}
        </div>
    )
}
