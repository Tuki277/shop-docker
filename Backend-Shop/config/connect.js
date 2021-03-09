var mysql = require('mysql')

// const connect = mysql.createConnection ({
//     host : 'localhost',
//     user : 'moeuser',
//     port : 3306,
//     password : 'moepass',
//     database : 'moe_db'
// })

var mysqlHost = process.env.MYSQL_HOST || '172.22.0.2';
var mysqlPort = process.env.MYSQL_PORT || '3306';
var mysqlUser = process.env.MYSQL_USER || 'root';
var mysqlPass = process.env.MYSQL_PASS || 'root';
var mysqlDB   = process.env.MYSQL_DB   || 'myShop';

const connect = mysql.createConnection ({
    host: mysqlHost,
    user: mysqlUser,
    port: mysqlPort,
    password : mysqlPass,
    database : mysqlDB
})

connect.connect((err) => {
    if (err){
        console.log('database connect fail')
        console.log(err)
    }
    else {
        console.log('database has connected')
    }
})

module.exports = connect