const connection = require("./connection.js");

const orm = {
    //select All the objects in mySQL
    all: function(tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, function(error, results) {
            // rewrite error message to data not found 
            if (error) {throw error}
            //what am I doing with the query response?  
            console.log(results);
            cb(results)
        })
    },

    //Insert one object at a time into the mysql
    create: function(tableInput, burgerName, wasItDevoured, cb) {
        let queryString = `INSERT INTO ${tableInput} (burger_name, devoured) values (?, ?)`
        connection.query(queryString,[burgerName, wasItDevoured], function(error, results) {
            // rewrite error message to data not found 
            if (error) {throw error}
            //what am I doing with the query response?  
                console.log(results);
            return results
            //code to send data to the user unsure of how to do this?  Talk to Trent once all the files are setup.
            })
        },

    // update the mysql folder one at a time
    update: function(wasItDevoured, burgerIdListNumber, cb) {
        let queryString = "UPDATE burgers SET devoured = ? WHERE burgers.id = ?"
        connection.query(queryString,[wasItDevoured, burgerIdListNumber], function(error, results) {
            
            // rewrite error message to data not found 
            if (error) {throw error}
            //what am I doing with the query response?  
                console.log(results);
                return results
            //code to update the corresponding burger with the new devoured value thus changing its position on the page.
            })
    }
};

module.exports = orm;
