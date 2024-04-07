async function nextId (client) {
    const result = await client.Pool.query("SELECT nextval('carts_id_seq')");

    return result.rows[0].nextval;
}

export async function addToCart (client, userId, goodId, now) {
    const id = await nextId(client);

    return await client.Pool.query("INSERT INTO carts (id, user_id, good_id, created_at) VALUES ($1, $2, $3, $4)", [id, userId, goodId, now]);
}

export async function deleteFromCart (client, id) {
    return await client.Pool.query("DELETE FROM carts WHERE id = $1", [id]);
}

export async function updateGoodCartCount (client, newCount, id) {
    console.log(id, newCount);
    return await client.Pool.query("UPDATE carts SET count = $1, updated_at = $2 WHERE id = $3", [newCount, new Date(), id]);
}

export async function queryMyCart (client, userId) {
    return await client.Pool.query("SELECT * FROM carts WHERE user_id = $1", [userId]);
}

export async function getCartGoodById (client, id) {
    return await client.Pool.query("SELECT * FROM carts WHERE id = $1", [id]).rows[0];
}

export async function getCartGoodByUserGoodId(client, goodId, userId) {
    return await client.Pool.query("SELECT * FROM carts WHERE user_id = $1 AND good_id = $2", [userId, goodId]);
}
