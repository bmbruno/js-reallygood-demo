(function() {

    /*
    
    Classes
    
    JavaScript classes provide encapsulation for data and code. These are similar to classes 
    in most modern object-oriented languages. Under the covers, classes use prototypes to
    construct and manage their functionality.
    
    */

    window.Demo.Classes = function () {

        console.clear();
        console.log("DEMO: Classes");

        //
        // EXAMPLE: Build a "person" class with member and method
        //

        class Person
        {
            location = "not set";

            constructor( first, last ) {

                this.firstName = first;
                this.lastName = last;

            }

            getFullName() {
                return `${this.firstName} ${this.lastName}`;
            }

            setLocation(location) {
                this.location = location;
            }
        }

        // Instantiate new instance of Person class
        let captain = new Person("Christopher", "Pike");
        
        // Access a member
        console.log(captain.firstName);

        // Call a method
        console.log(captain.getFullName());

        // Call another method and access related member
        captain.setLocation("Bridge");
        console.log(captain.location);

    }

})();