// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // Add a new burger.
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#yum").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    //change the devoured state to true{1}
    $(".devouredBecomesTrue").on("click", function(event) {
        event.preventDefault();

        //burger id in table
        let id = $(this).data("id");
        let devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
        
        //change the state to false{0} however is not rendering or working correctly
        $(".devouredBecomesFalse").on("click", function(event) {
            event.preventDefault();
            console.log("consume again pressed")
            //burger id in table
            let id = $(this).data("id");

            let devouredState = {
                devoured: 0
            };
    
            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: devouredState
            }).then(function() {
                console.log("Consume burger");
                location.reload();
            });
        });
    });
})