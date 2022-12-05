import { createPool } from "mysql2/promise";

export async function connect(){
    const connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        connectionLimit: 10
    });
    return connection;
}