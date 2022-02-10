const mysql= require('mysql2');


const connection =  mysql.createConnection({
    host: 'localhost',
        user: 'root',
        password: 'maddy123',
        database: 'tracker_db'
})
connection.connect(function (err){
    if (err)throw err
})

module.exports =  connection;