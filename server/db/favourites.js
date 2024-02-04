async function nextId(client) {
    const result = await client.Pool.query("SELECT nextval('favourites_id_seq')");

    return result.rows[0].nextval;
}

export async function addToFav(client, userId, goodId, now) {
    const id = await nextId(client.Pool);

    return await client.Pool.query("INSERT INTO favourites (id, user_id, good_id, created_at) VALUES ($1, $2, $3, $4)", [id, userId, goodId, now]);
}

export async function deleteFromFavById(client, id) {
    return await client.Pool.query("DELETE FROM favourites WHERE id = $1", [id]);
}

export async function queryMyFavourites(client, userId) {
    return await client.Pool.query("SELECT * FROM favourites WHERE user_id = $1", [userId]);
}
