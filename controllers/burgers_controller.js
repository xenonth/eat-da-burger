//DEPENDENCY VARIABLES
const express = require("express");
const router = express.Router();

//local Module variables
const burger = require ("burger.js");

//retrieving and displaying burger data to the index page

router.get("/", (req, res) =>{
    burger.all((data) => {
        let burgerList = {
            burgers: data
        };
        console.log(burgerList);

        res.render("index", burgerList)
    })
});

//posting to the database
router.post("/api/burgers", (req, res) => {
    burger.create(req.body.params, (result) => {
        res.json({id: result.insertId})
    })
}) 


//route to update the boolean value? Come back to it after the handlebar

module.exports = router;