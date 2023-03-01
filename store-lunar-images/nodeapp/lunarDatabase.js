const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'Dell-R0I9C8H8',
    user: 'root',
    password: '',
    database: 'Your Moon Database'
});

conn.connect(function(err){
    if(err)
        throw err;
    
    console.log('Database has connected successfully!');
});

module.exports = conn;