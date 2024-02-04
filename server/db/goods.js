export async function getGoods(client) {
    return await client.Pool.query('SELECT * FROM goods');
}
