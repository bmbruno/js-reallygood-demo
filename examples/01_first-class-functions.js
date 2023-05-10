(function() {

    window.Demo.firstClassFunctions = function () {

        console.clear();
        console.log("EXAMPLE: First-Class Functions");

        /*
        
        FIRST CLASS FUNCTIONS
        
        Functions are considered 'first-class' when they can be passed around like a variable.
        In JavaScript, functions can be assigned to a variable like any other value, then that
        variable can be passed around, returned, and invoked.

        In JavaScript, first-class functions allow for highly-dynamic behavior to be created by
        deferring or delegating program logic to a later exection time.
        
        */

        // EXAMPLE 1: Assign function to a variable
        let getFullName = function ( first, last ) {

            return (first + " " + last);

        };

        // Call function via variable name
        console.log( getFullName("Liam", "Shaw") );

        // EXAMPLES 2: Pass function as a parameter to another function
        function buildProfile ( age, fullNameFn ) {

            let name = fullNameFn("Jack", "Crusher");
            console.log(`Age: ${age} | Name: ${name}`)

        }

        // Invoke buildProfile() with getFullName() as a parameter
        buildProfile(38, "123 Line Dr", getFullName);

    }

})();