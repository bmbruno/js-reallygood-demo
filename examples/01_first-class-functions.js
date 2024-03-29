(function() {

    /*
    
    FIRST CLASS FUNCTIONS
    
    Functions are considered 'first-class' when they can be passed around like a variable.
    In JavaScript, functions can be assigned to a variable like any other value, then
    passed around, returned, and invoked.

    In JavaScript, first-class functions allow for dynamic behavior to be created by
    deferring or delegating logic to a later exection time.
    
    */

    window.Demo.firstClassFunctions = function () {

        console.clear();
        console.log("DEMO: First-Class Functions");

        //
        // EXAMPLE 1: Assign function to a variable
        //

        let getFullName = function ( first, last ) {

            return (first + " " + last);

        };

        // Call function via variable name
        console.log( getFullName("Liam", "Shaw") );

        //
        // EXAMPLES 2: Pass function as a parameter to another function
        //

        function buildProfile ( age, fullNameFn ) {

            let name = fullNameFn("Jack", "Crusher");
            console.log(`Age: ${age} | Name: ${name}`)

        }

        // Invoke buildProfile() with getFullName() as a parameter
        buildProfile(38, getFullName);

    }

})();