/* eslint-disable */
import {Client} from 'pg';

async function insertData(username: string, email: string, password: string) {
    const client = new Client ({
        host: 'ep-mute-firefly-a13j403b.ap-southeast-1.aws.neon.tech',
        port: 5432,
        database: '100xDevs',
        user: '100xDevs_owner',
        password: 'XwDF6RYc1jbK',
    });

    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
        const values = [username, email, password];
        const res = await client.query(insertQuery);
        console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
        console.error('Error during the insertion:', err);
    } finally {
        await client.end(); // Close the client connection
    }
}

insertData('username5', 'user5@example.com', 'user_password').catch(console.error);
