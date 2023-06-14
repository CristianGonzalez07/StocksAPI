import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.DB_HOST || 'localhost';
const port = Number(process.env.DB_PORT) || 3306;
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'password';
const db_name = process.env.DB_NAME || 'mydb_name';

const connection = mysql.createConnection({
  host,
  port,
  user,
  password,
  database:db_name,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Successful connection to the database.');
});

export default connection;
