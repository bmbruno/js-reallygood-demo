(function() {

    /*
    
    Array.filter
    
    filter() returns a new array containing elements that match the truthy condition of
    the provided callback function.
    
    */

    window.Demo.ArrayFilter = function () {

        console.clear();
        console.log("DEMO: Array.filter");

        //
        // EXAMPLE: filter only the bridge crew from this list
        //

        let crew = [
            { name: "Jonathan", location: "Bridge" },
            { name: "Hoshi", location: "Bridge" },
            { name: "Trip", location: "Engineering" }
        ];

        console.log(crew);

        let bridgeCrew = crew.filter( (element, index, array) => {

            return element.location === "Bridge";

        });

        console.log(bridgeCrew);

    }

})();