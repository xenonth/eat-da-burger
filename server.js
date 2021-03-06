// Dependency packages

const express = require("express");

const exphbs = require("express-handlebars");

const path = require("path");

const routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 3001;

const app = express();
//serve static contetnt for the app from the public directory.
//using/accessing routes file
app.use(express.static(path.join(__dirname, '/public')));

//Parse Application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });