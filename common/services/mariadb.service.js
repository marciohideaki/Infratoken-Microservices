const mariadb = require('mysql');
let count = 0;

var connection = mariadb.createConnection({
  host: "192.168.1.120",
  user: "wpuser",
  password: "password",
  database: "infratoken"
});

/*
connection.connect(function(err) {
  if (err) throw err;
  console.log("You are connected!");
});
connection.end();
*/

const connectWithRetry = () => {
    console.log('MariaDB connection with retry')
    connection.connect(function(err) {
        if (err) {
            console.log('MariaDB connection unsuccessful, retry after 5 seconds. ', ++count);
            setTimeout(connectWithRetry, 5000)
        }
        else console.log('MariaDB is connected');
    })};

connectWithRetry();
exports.mariadb = mariadb;