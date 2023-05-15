(function() {

    /*
    
    Fetch
    
    Fetch provides a way to request data from a server. It can also be used to send data to a server.
    The fetch() method returns a promise.    
    
    */

    window.Demo.Fetch = function () {

        console.clear();
        console.log("EXAMPLE: Fetch");

        //
        // EXAMPLE: Fetch loads data from a remote server
        //          

        async function GetTrailData() {

            // First parameter is source URL, second id object of options, most typically CORS settings
            let result = await fetch("https://www.brandonbruno.com/sites/code/reactdemo/trails.json", { mode: 'cors' });

            // json() returns the resulting content as JSON; also available: text(), blob(), arrayBuffer(), formData()
            let jsonData = await result.json();            
            return jsonData;

        }

        // Get data, then output part of the data to the console
        GetTrailData()
            .then(trailData => {

                console.log(trailData);
                trailData.forEach(element => console.log(`Name: ${element.name}; Length: ${element.length} miles`));

            });



    }

})();