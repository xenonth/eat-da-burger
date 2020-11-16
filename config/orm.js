const connection = require("connection.js");

var orm = {
    //select All the objects in mySQL
    selectAll: function () {
        let queryString = "SELECT * FROM burgers"
        connection.query(queryString, (error, results) => {
            // rewrite error message to data not found 
            if (error) throw error;
            //what am I doing with the query response?  
            console.log(results);
        })
    },

    //Insert one object at a time into the mysql
    insertOne: function (burgerName, wasItDevoured) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) values (?, ?)"
        connection.query(queryString,[burgerName, wasItDevoured], (error, results) => {
            // rewrite error message to data not found 
            if (error) throw error;
            //what am I doing with the query response?  
                console.log(results);
            })
        },

    // update the mysql folder one at a time
    updateOne (wasItDevoured, burgerIdListNumber) {
        let queryString = "UPDATE burgers SET devoured = ? WHERE burgers.id = ?"
        connection.query(queryString,[wasItDevoured, burgerIdListNumber], (error, results) => {
            
            // rewrite error message to data not found 
            if (error) throw error;
            //what am I doing with the query response?  
                console.log(results);
            })
    }
};

module.exports = orm;
