(function() {

    /*
    
    VARIABLE SCOPING
    
    JavaScript has several keywords for affecting the scope of variables.

        var: global- or function-scoped; only available in the current function or the 
                global object ('window' in browsers)

        let: block scope; only available in the current code block

        const: variable cannot be re-assigned (but sub-values can still be changed)
    
    */
 
    window.Demo.variableScopingVar = function () {

        //
        // EXAMPLE 1: var
        //

        console.clear();
        console.log("EXAMPLE: Variable Scoping: var");

        // Declaring a variable that will be global to this function
        var announcement = 'This is a global variable!';

        function setAnnouncement() {

            // This overwrites the global 'announcement' variable declared above
            announcement = "Global variable has been overwritten in a function! Not good!";

        }

        console.log(announcement);
        setAnnouncement();
        console.log(announcement);

    },

    window.Demo.variableScopingLet = function () {

        //
        // EXAMPLE 2: let
        //

        console.clear();
        console.log("EXAMPLE: Variable Scoping: let");

        // Declaring a variable that will be global to this function
        var announcement = 'This is a global variable!';

        function setAnnouncement() {

            // Declaring a variable local to this block scope (i.e. this function's block - everything between { and })
            let announcement = "This variable is local to this function only!";
            console.log(announcement)

        }

        console.log(announcement);
        setAnnouncement();
        console.log(announcement);

    },

    window.Demo.variableScopingConst = function () {

        //
        // EXAMPLE 3: const
        //

        console.clear();
        console.log("EXAMPLE: Variable Scoping: const");

        // Declaring a variable that cannot be directly mutated/changed
        const announcement = "This cannot be changed!";
        console.log(announcement);
        
        // This will throw an error in the console
        announcement = "NEW VALUE";

        // Arrays and object sub-values can still be mutated, but the variable cannot be re-assigned
        const scores = [ 14, 21, 35 ];
        console.log(scores);

        scores.push(45);
        console.log(scores);

        // Trying to re-assign this array will throw an error
        scores = [ 3, 7, 56 ];
        

    }

})();