// Import orm.js into burger.js
const orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    // Display all burgers in the db.
    display: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // Add a new burger to the db.
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Change the devoured status to true.
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
}



module.exports = burger;