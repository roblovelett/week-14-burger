// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var table = "burgers";

var burger = {
  all: function(cb) {
    orm.selectAll(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(col, val, cb) {
    orm.insertOne(table, col, val, function(res) {
      cb(res);
    });
  },
  update: function(col, val, cb) {
    orm.updateOne(table, col, val, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;