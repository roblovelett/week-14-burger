/*3. Inside the `burgers_controller.js` file, import the following: * Express *
`burger.js`
4. Create the `router` for the app, and export the `router` at the end of your
file.*/

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var bodyParser = require("body-parser");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = { //handlebars object
      burgers: data //array of objects, #each burgers  
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/create", function (req, res) {
  //call burger logic insertOne function(column,data,callback);
  burger.create("burger_name", req.body.name, function () {
    //redirect to updated main page after insertOne
    res.redirect("/");
  })
});

router.put("/devour/:id", function (req, res) {
  burger.update("devoured", 1, req.params.id, function () {
    res.redirect("/");
  })
});

router.use(function (req, res) { //init load/direct
  res.redirect("/");
});

module.exports = router; //export