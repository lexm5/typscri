import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
});

export default db;
