const mysql = require("mysql");
require("dotenv").config();

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "w3learn",
//   });

const connection = mysql.createConnection({
  host: "sql11.freemysqlhosting.net",
  port: "3306",
  user: "sql11671272",
  password:"YYWiG8C7lT",
})

  connection.connect((err) => {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL") ;
  });

  module.exports = connection;