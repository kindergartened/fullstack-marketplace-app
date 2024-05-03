export function userGraph(user) {
    user.favMap = [...Array(100).keys()].reduce((acc, el) => {
        acc[el] = false;
        return acc;
    }, {});
    if (user.favourites.Rows.length) {
        if (user.favourites.Graph.Goods) {
            goodsGraph(user.favourites.Rows, user.favourites.Graph);
        }
        user.favourites.Rows.forEach(el => {
            user.favMap[el.good_id] = true;
        });
    }
    if (!user.favourites) {
        user.favourites.Adds = {};
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
        e.good = graph.Goods?.find(good => good.id === e.good_id);
        return e;
    });
}
