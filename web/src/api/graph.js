export function userGraph(user) {
    if (user.favourites.Rows.length) {
        if (user.favourites.Graph.Goods) {
            goodsGraph(user.favourites.Rows, user.favourites.Graph);
        }
        user.favMap = user.favourites.Rows.reduce((acc, el) => {
            acc[el.id] = el;
            return acc;
        }, {});
    }
    if (user.cart.Rows.length) {
        if (user.cart.Graph.Goods) {
            goodsGraph(user.cart.Rows, user.cart.Graph);
        }
        user.cartMap = user.cart.Rows.reduce((acc, el) => {
            acc[el.id] = el;
            return acc;
        }, {});
    }
    return user;
}

function goodsGraph(rows, graph) {
    rows.map(e => {
        e.good = graph.Goods.filter(good => good.id === e.good_id)[0];
        return e;
    });
}
