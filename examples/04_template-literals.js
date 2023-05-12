(function() {

    /*
    
    TEMPLATE LITERALS
    
    Written with backticks (``) instead of single or double quotes ('', ""), template literals allow for 
    multi-line strings and string interpolation.

    The dollar sign is used to denote a token - for example: `Here is a ${token}`
    
    */

    window.Demo.TemplateLiterals = function () {

        console.clear();
        console.log("EXAMPLE: Template Literals");

        //
        // EXAMPLE 1: Multi-line string
        //

        let odeToSpot =
            `Felis catus is your taxonomic nomenclature,
            An endothermic quadruped, carnivorous by nature;
            Your visual, olfactory, and auditory senses
            Contribute to your hunting skills and natural defenses.`;

        console.log(odeToSpot);
        
        //
        // EXAMPLE 2: string interpolation
        //

        let firstName = "Christopher";
        let lastName = "Pike";
        
        // String concatenation
        console.log("Hello, " + firstName + " " + lastName + " (concatenation)");
        
        // Template literals use the backtick (`) for declaring templates
        console.log(`Hello, ${firstName} ${lastName} (interpolation)`);
        
        // Expressions can be evaluated in template literals
        console.log(`${firstName} is ${(2023 - 1984)} years old.`);       
    }

})();