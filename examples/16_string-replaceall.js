(function() {

    /*
    
    String.replaceAll
    
    The String method replaceAll() replaces *all* instances of a string with another. This contrasts
    to the older replace() method, which only replaced the first instance of a string.
    
    */

    window.Demo.StringReplaceAll = function () {

        console.clear();
        console.log("DEMO: String.replaceAll");

        let intro = "These are the voyages of the starship Enterprise.";

        // String.replace() only replaces first found instance
        let newIntro1 = intro.replace("the", "THE");
        console.log(newIntro1);

        // Workaround: use a regular expression
        let newIntro2 = intro.replace(new RegExp("the", "g"), "THE");
        console.log(newIntro2);

        // String.replaceAll() does exactly as you'd expect: replaces all instances of the string
        let newIntro3 = intro.replaceAll("the", "THE");
        console.log(newIntro3);
    }

})();