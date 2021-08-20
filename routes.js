const express = require('express')
const router = express.Router();
const mysql = require('mysql')


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
})

router.post('/api/register', (req, res) => {
    const userN = req.body.user;
    const passW = req.body.pass;
    const sql = "INSERT INTO users (username, password) VALUES (?,?)";

    db.query(sql, [userN, passW], (err, result) =>{
        res.send(result);
        console.log(res);
    });
});

router.post('/api/values', (req, res) => {
    const sql = "INSERT INTO users (username, password) VALUES ('lucashello','ma45sd4ye')";
    db.query(sql, (err, result) =>{
        res.send(result);
    });
});


router.get('/api/get', (req, res) => {

    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        res.send(result);
    });
});

router.get('/', (req, res) => {
    res.send('Hello');
});

module.exports = router;