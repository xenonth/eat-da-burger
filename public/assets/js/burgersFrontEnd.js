$(function () {
    $(".change-devoured").on("click", function (event) {
        event.preventDefault();

        let id = $(this).data("id");

        if ($(this).data("devoured") === false) {
           devoured = true
        } else {
            devoured = false
        }
     
        console.log(devoured);

        let newDevoured = {
            devoured: devoured
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devoured status to ", devoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#yum").val(),
            devoured: $("[name=devoured]:checked").val()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger on the menu");
                // Reload the page to get the updated list
                location.reload();
            }
        )
    });

});