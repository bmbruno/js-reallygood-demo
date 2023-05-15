(function() {

    /*
    
    Async & Await

    'async' and 'await' provide a different syntax and structure for working with promises; they primarily
    help solve the problem of 'thenable hell' and long promise chains.
    
    */

    window.Demo.AsyncAwait = function () {

        console.clear();
        console.log("DEMO: Async & Await");

        // 'async' tells the interpreter to not wait for this function - it can continue executing 
        // the rest of the program while this function does its thing asynchronously
        async function GetData() {

            try {

                // Control flow pauses here and lets this promise settle
                let result = await longRunningFunction(6000);

                // When the promise fulfills (resolves), execution continues here
                console.log(result);

            } catch (exception) {

                // If the promise rejects, control flow moves to this catch block
                console.log(exception);

            }
        }

        // This simulates a function that takes a long time to complete using a promise
        function longRunningFunction(timeToRun) {

            return new Promise((resolve, reject) => {

                console.log("1) longRunningFunction promise starting...");
                
                setTimeout(() => {

                    resolve("3) longRunningFunction promise resolved.");

                }, timeToRun);
            
            });

        }

        // Entry point
        GetData();

        // Control flow resumes here while the promise waits to fulfill
        console.log("2) Program continues to run past the async function (wait a few seconds)...");

    }

})();