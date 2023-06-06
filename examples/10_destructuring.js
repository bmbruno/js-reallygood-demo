(function() {

    /*
    
    Destructuring
    
    Unpacks values from an array or object into variables. The general syntax is:

        let [ value1, value2, value3 ] = arrayVariable;

    Closely related is the Rest operator, which catches the remaining values that weren't handled via destructuring:

        let [ value1, ...everythingElse ] = arrayVariable
    
    */

    window.Demo.Destructuring = function () {

        console.clear();
        console.log("DEMO: Destructuring");

        //
        // EXAMPLE 1: array destructuring
        //

        let numbers = [ 4, 7, 13, 22 ];

        // Destructure the array into variables (variable names don't matter and can be anything)
        let [ a, b, c, d ] = numbers;

        console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);

        // Destructures just the first two elements of the array
        let [ e, f ] = numbers;
        console.log(`e: ${e}, f: ${f}`);

        //
        // EXAMPLE 2: using rest operator to capture remaining values in array
        //

        let introduction = ["These", "are", "the", "voyages", "of", "the", "starship", "Enterprise" ];

        // Capture first few elements, then gather the rest using the ... operator
        let [ first, second, third, ...remainder ] = introduction;

        console.log(`${first} ${second} ${third}`);
        console.log(`${remainder}`);

        //
        // EXAMPLE 3: object destructuring
        //

        let sector = {
            
            number: "001",
            name: "Solar System",
            planets: [
                {
                    name: "Earth",
                    size: 1.0
                },
                {
                    name: "Mars",
                    size: 0.53
                }
            ]
        }

        // Destructure properties from object (names do matter; order doesn't)
        let { number, name, planets } = sector;

        console.log(`number: ${number}`);
        console.log(`name: ${name}`);
        console.log(`First planet: ${planets[0].name}`);



    }

})();