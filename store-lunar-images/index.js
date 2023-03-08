const express = require('express');
const app = express();
const mysql = require('mysql');
const fs = require('fs');

const db = mysql.createPool({
    'connectionLimit': 10,
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': '',
    'database': 'lunarimages',
})

const buffer = fs.readFileSync('../some_images/22.jpg');   // read the contents of the file into a buffer

app.get('/', (req, res) => {
    
})

app.listen(3001, () => {
    console.log('Running on Port 3001');
});









/*
WORKS
app.get('/hello', (req, res) => {
    // sql query to insert the buffer into the blob column
    const sqlInsert = 'INSERT INTO LunarImage (img) values(?)';

    // execute the query with the buffer as a parameter
    db.query(sqlInsert, [buffer], (error, result) => {
        if(error){
            throw(error);
        }
        
        res.send('Successully inserted into database!');
        console.log('Successfully inserted into the lunarimages database!');
    });
})




app.get('/delete', (req, res) => {
    const sqlDelete = 'delete from LunarImage where id = 19';
    db.query(sqlDelete, (err, result) => {
        if(err) throw(err);

        res.send('Successfully deleted from database');
    })
})
*/