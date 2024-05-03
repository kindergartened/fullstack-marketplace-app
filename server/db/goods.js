export async function getGoods(client) {
    return await client.Pool.query('SELECT * FROM goods');
}

export async function getGoodsByIds(client, ids) {
    return await client.Pool.query(`SELECT * FROM goods WHERE id IN (${ids.join(', ')})`);
}
