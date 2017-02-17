/*3. Create an `orm.js` file inside `config` directory.

 * Import (require) `connection.js` into `orm.js`

 * In the `orm.js` file, create the methods that will execute the necessary
 MySQL commands in the controllers. These are the methods you will need to use
 in order to retrieve and store data in your database. * `selectAll()` *
 `insertOne()` * `updateOne()`

 * Export the ORM object in `module.exports`.*/

var connection = require("../config/connection.js"); // Import MySQL connection.

var orm = { // Object for all our SQL statement functions.
    selectAll: function (tableInput, cb) { //select all
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) { //add a burger
        var queryString = "INSERT INTO " + table + " (" + col + ") VALUES (" + val + ");";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    updateOne: function (table, col, val, cb) { //update/devour burger
        var queryString = "UPDATE " + table + " SET " + col + "  = 1 WHERE id = " + val + ";";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    }
};

module.exports = orm; //export orm