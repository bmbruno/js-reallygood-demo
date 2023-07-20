(function() {

    /*
    
    ARRAY.MAP
    
    Array.map() executes a function for each element of an array and returns a new array.
    It accepts a callback function (typically written as an arrow function expression) that
    itself takes three parameters:

        element: the current element being processed
        index: index of the current element
        array: the complete array being called on (can be combined with 'index' param)

    Only the 'element' param is needed for most practical applications of map().
    
    */

    window.Demo.ArrayMap = function () {

        console.clear();
        console.log("DEMO: Array.map");

        // Build array with sample values
        let worlds = [ "Earth", "Risa", "Andoria", "Vulcan" ];
        console.log(worlds);

        // Transform each element in the array and assign the new array to a new variable
        let federation = worlds.map( (element, index, array) => {

            return `${element} (Federation)`;

            // Could also be written as:
            // return `${array[index]} (Federation)`;

        });

        console.log(federation);

    }

})();