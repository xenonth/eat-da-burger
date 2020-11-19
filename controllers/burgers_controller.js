//DEPENDENCY VARIABLES
const express = require ("express");
let router = express.Router();

//local Module variables
const burger = require ("../models/burger.js");

//retrieving and displaying burger data to the index page

//need to do something about a isEaten variable

router.get("/", function(req, res) {
    burger.all(function(data) {
        let burgerObject = {
            burgers: data
        }
        console.log(burgerObject);

        res.render("index", burgerObject)
    });
});

//posting to the database
router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
    
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


//route to update the boolean value? Come back to it after the handlebar

module.exports = router;