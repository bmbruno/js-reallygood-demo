(function() {

    /*
    
    Array.find & Array.findIndex
    
    find() and findIndex() are methods of the Array object that iterate and return the first value
    that matches the truthy condition of the provided callback function. The return value of
    each differs slightly:

        find() returns the first elment matching a condition.
        
        findIndex() returns the first array index whose element matches a condition.
    
    */

    window.Demo.ArrayFind = function () {

        console.clear();
        console.log("DEMO: Array.find");

        //
        // EXAMPLE 1: Array.find() - returns first matched element
        //

        let crew = [
            { name: "Jonathan", position: "Captain" },
            { name: "Hoshi", position: "Communications" },
            { name: "Trip", position: "Engineer" }
        ];

        let comms = crew.find( (element, index, array) => {

            return element.position === "Communications";

        });

        console.log(`Array.find: ${comms.name}`);
        console.log(comms);
        
        //
        // EXAMPLE 2: Array.findIndex() - returns index of first matched element
        //

        let commsIndex = crew.findIndex( (element, index, array) => {

            return element.position === "Communications";

        });

        console.log(`Array.findIndex: ${commsIndex}`);

    }

})();