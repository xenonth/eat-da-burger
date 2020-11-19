//code to wait for DOM to load before anything happens
    
        $(".change-devoured").on("click", (event) => {
            event.preventDefault();
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
                burger_name: $(".yum").val().trim(),
            };

            //Post REquest for database to upload new data
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(() => {
                console.log("New Burger Created")

            })
        })
