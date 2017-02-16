var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var port = 3000;

app.use(express.static(process.cwd() + "/public")); // Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method")); //Override with POST having ?_method=DELETE
var exphbs = require("express-handlebars"); // Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" })); //set default handlebars to main
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");  //link to burger controller
app.use("/", routes); //set default page to "/"
app.listen(process.env.PORT || port); //listen on port, if undefined listen on default port 3000