(function() {

    /*
    
    JAVASCRIPT OBJECT NOTATION (JSON)
    
    JSON is a way to represent structured data as a JavaScript object. JSON be easily serialized and 
    deserialized to a string format for transmission between applications, servers, etc. Because JSON
    transforms from string to a native JavaScript object, it can be used as native code without extra effort.

    Most JavaScript runtimes include functions to serialized/deserialize JavaScript objects. For example:

        JSON.stringify() - serialize JavaScript objects to JSON
        JSON.parse() - deserialize JSON to JavaScript objects
    
    */

    window.Demo.JSON = function () {

        console.clear();
        console.log("EXAMPLE: JSON");

        //
        // EXAMPLE 1: Serializing a JavaScript object
        //

        // Define an object
        let voyager = { 
            name: "Star Trek: Voyager",
            cast: [
                { name: "Kate Mulgrew", role: "Janeway" },
                { name: "Tim Russ", role: "Tuvix" },
                { name: "Ethan Phillips", role: "Tuvix" }
            ]
        };

        // Serialize using top-level JSON object
        let payload = JSON.stringify(voyager);

        console.log(voyager);
        console.log(payload);
            
        //
        // EXAMPLE 2: Deserializing JSON to a JavaScript object
        //

        let voyagerObject = JSON.parse(payload);
        
        // Object can be used right away as code
        console.log("First cast member: " + voyagerObject.cast[0].name);

    }

})();