//code to wait for DOM to load before anything happens
    $(function () {
        $(".change-devoured").on("click", (event) => {
            let id = $(this).data("id");
            let isItEaten = $(this).data("newDevoured");

            let newEatenState = {
                devoured: isItEaten
            };

            //sen the PUT request

            $.ajax(`/api/burgers/ ${id}`, {
                type: "PUT",
                data: newEatenState
            }).then(() => {
                console.log(`newDevouredState is ${newEatenState}`)
                //reload page for updated list
                location.reload();
            });
        });

        $(".create-form").on("submit", (event) => {
            event.preventDefault();

            let newBurger = {
                burger_name: $("#yum").val().trim(),
                devoured: false

            };

            //Post REquest for database to upload new data
        })
    })