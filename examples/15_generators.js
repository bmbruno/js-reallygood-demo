(function() {

    /*
    
    Generators
    
    A generator function is a type of iterator that 
    is denoted with an asterisk after the function keyword (function*).
    
    */

    window.Demo.Generators = function () {

        console.clear();
        console.log("DEMO: Generators");

        //
        // EXAMPLE 1: This generator will produce sequential numbers infinity
        //

        function* IncrementInfinitely() {
            
            x = 0;
            
            while (true) {

                x += 1;

                // 'yield' will return the current value of x when .next() is called
                // on this instance of the generator function
                yield x;
            }
        }

        // Instantiate function; this will create a generator that maintains state
        let gen = IncrementInfinitely();

        // .next() returns an object with two values:
        //     'value' (whatever is being yielded)
        //     'done' (true/false if last value has been yielded)
        console.log(gen.next());

        // Continue getting values from the generator function
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);    

    }

})();