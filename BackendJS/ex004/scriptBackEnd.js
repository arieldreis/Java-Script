import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
const PORT = 3011;
app.use(express.json());
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "testedb"
});
app.get('/login', async(req, res) => {
    try{
        const [rows] = await pool.query(
            'insert into users(nome, nascimento, senha) values (?, ?, ?)',
            []
        );
    }catch(error){

    }
})