(function() {

    /*
    
    ARROW FUNCTION EXPRESSIONS

    Function expressions are a terse alternative to writing full-fledge functions. Arrow function
    expressions also do not have a binding to 'this' (this means they should not be used as methods).

    Arrow function expressions can be used to implement terse functionality without the ceremony
    of full fledge functions.
    
    */

    window.Demo.ArrowFunctionExpressions = function () {

        console.clear();
        console.log("DEMO: Arrow Function Expressions");

        //
        // EXAMPLE 1: Regular function with parameters and its expression equivilant
        //

        // Regular function defintion
        function getFullName ( first, last ) {

            console.log(`Full name: ${first} ${last}`);
        }

        getFullName("William", "Riker");

        // Same function as above, but as an anonymous arrow function expression (will not be invoked)
        (first, last) => console.log(`Full name: ${first} ${last}`)

        //
        // EXAMPLE 3: Arrow function expression being assigned to a variable (functions are first class!)
        //

        let getFullNameFn = (first, last) => { console.log(`Full name: ${first} ${last}`) };
        getFullNameFn("Thomas", "Riker");

    }

})();