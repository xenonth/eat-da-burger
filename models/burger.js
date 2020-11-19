const orm = require("../config/orm.js");

//code which calls the orm functions
const burger = {
    //call
    all: function(cb) {
        orm.all("burgers", function(res) {
            return res;
        });

    },
        //code to list data Items in a list or push into an array?,
    
    create: function(burgerName) {
        orm.create("burgers", burgerName, false);
    },
    //Should update the boolean value of the burger from true to false and vice versa
    update: function(objColVals, condition, cb) {

        orm.update(objColVals, condition, cb, (res) => {

            return res
        
        });
    }
}

module.exports = burger;