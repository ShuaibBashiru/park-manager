const connectionMssql = require('mssql');
require('dotenv').config()

const config = {
  server: process.env.DBMSSQL_HOST,
  user: process.env.DBMSSQL_USERNAME,
  password: process.env.DBMSSQL_PASSWORD,
  database: process.env.DBMSSQL_DATABASE,
  options: {
    encrypt: false // disable SSL verification
  },
  port: parseInt(process.env.DBMSSQL_PORT),

};

connectionMssql.connect(config, (err) => {
  if (err) throw err;
  console.log('Connected to MSSQL server!');
});


module.exports = connectionMssql;