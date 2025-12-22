import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

export default mysql.createPool({
    database : process.env.DATABASE_NAME,
    host : process.env.DATABASE_HOST,
    password : process.env.DATABASE_PASS,
    user : process.env.DATABASE_USER,
    connectionLimit: 10,
})

