const mysql = require("mysql");

const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL)
} else {

connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "alpha",
    database: "burgers_DB"
  });
}

// Make connection to local database.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
 });

  module.exports = connection;