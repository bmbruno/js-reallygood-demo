(function() {

    /*
    
    OPTIONAL CHAINING
    
    Evaluates an expression to 'undefined' if any of the properties in a
    chain would evaluate to 'undefined' or 'null'. No error is thrown.
    
    */

    window.Demo.OptionalChaining = function () {

        console.clear();
        console.log("EXAMPLE: Optional Chaining");

        // An object with various properties
        let ship = {

            name: "Enterprise",
            registry: "NCC-1701-D",

            captain: {
                firstName: "Jean Luc",
                lastName: "Picard"
            }
        }

        // 'ship.name' exists, so this works
        console.log("Ship Name: " + ship?.name);

        // 'ship.size' does not exists; returns 'undefined'
        console.log("Num of Decks: " + ship?.size?.decks);

        // 'ship.captain.middleName' doesn't exist; returns 'undefined'
        console.log("Captain Middle Name: " + ship?.captain?.middleName);

    }

})();