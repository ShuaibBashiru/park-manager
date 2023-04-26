const mysql = require('mysql');
require('dotenv').config()

const connectionMysql = mysql.createConnection({
  host: process.env.DBMYSQL_HOST,
  user: process.env.DBMYSQL_USERNAME,
  password: process.env.DBMYSQL_PASSWORD,
  database: process.env.DBMYSQL_DATABASE,
});

connectionMysql.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

module.exports = connectionMysql;