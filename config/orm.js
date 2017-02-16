/*
 3. Create an `orm.js` file inside `config` directory.

 * Import (require) `connection.js` into `orm.js`

 * In the `orm.js` file, create the methods that will execute the necessary
 MySQL commands in the controllers. These are the methods you will need to use
 in order to retrieve and store data in your database. * `selectAll()` *
 `insertOne()` * `updateOne()`

 * Export the ORM object in `module.exports`.
*/

// Import MySQL connection.
var connection = require("connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};

// Helper function for SQL syntax.
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        };
    };
    return arr.toString();
};

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (tableInput, cb) { //select all
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) { //add a burger
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true} 
    updateOne: function (table, col, val, cb) { //update
        var queryString = "UPDATE " + table + " SET " + col + "  = 1 WHERE id = " + val ;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;