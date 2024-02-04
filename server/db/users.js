async function nextId (client) {
    const result = await client.Pool.query("SELECT nextval('users_id_seq')");
    return result.rows[0].nextval;
}

export async function registerUser (client, name, email, hashPass, now) {
    const id = await nextId(client);
    await client.Pool.query("INSERT INTO users (id, name, email, hash_password, created_at) VALUES ($1, $2, $3, $4, $5)", [id, name, email, hashPass, now]);
    return {
        email: email,
        hash_password: hashPass,
        name: name,
        id: id
    };
}

export async function getUserById (client, id) {
    return await client.Pool.query("SELECT * FROM users WHERE id = $1", [id]);
}

export async function getUserByEmailTx (client, email) {
    const result = await client.Pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
}
