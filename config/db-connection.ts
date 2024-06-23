import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    database: 'postgres',
    host: 'aws-0-ap-south-1.pooler.supabase.com',
    port: 6543,
    password: 'PoojaKushwaha@123',
    username: 'postgres.rnqhzxulmtlmfjfgvfpl',
    dialect:'postgres'

})

try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.');

} catch (error) {
    console.error('Unable to connect to the database:', error);
}