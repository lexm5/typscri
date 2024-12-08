import { table } from 'console';
import db from '../db';

async function createDevicesTable() {
    const exists = await db.schema.hasTable('devices');
    if (exists) {
        await db.schema.createTable('devices', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('type').notNullable();
            table.timestamps(true, true);
        });
        console.log('tabale "devices" created');
    } else {
        console.log('Table "devices" already exists');
    }
}

createDevicesTable()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('Error creating table:', err);
        process.exit(1);
    });