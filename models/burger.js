let orm = require("../config/orm.js");

//code which calls the orm functions
const burger = {
    //call
    all: function (callback) {
        orm.selectAll("burgers,", function(result) {
            callback(result);
        });
    
    },
        //code to list data Items in a list or push into an array?,
    
    create: function (burgerName) {
        orm.insertOne("burgers", burgerName, false);
    },
    //Should update the boolean value of the burger from true to false and vice versa
    update: function (eatenState, burgerIdListNumber) {
        orm.updateOne(eatenState, burgerIdListNumber);
    }
}

modules.export = burger;