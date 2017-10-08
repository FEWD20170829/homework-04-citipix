$(function () {

  // Use ```$.click``` to trigger the application to conduct 
  // a city search when the user clicks the "submit" button
  $("#submit-btn").click(citySearch);

    function citySearch() {

        // Call ```$.val()``` on inputs to get the string value of your user's input
        // Store user input in a variable called ```city```
        var city = $("#city-type").val(); 

        var cityClass = convertCityNameToClassName(city);

        // Remove existing classes with each consecutive click
        $("body").removeClass("nyc sf la austin sydney");

        // Add class based on user input
        $("body").addClass(cityClass);
    }

    function convertCityNameToClassName(city) {

        // Create ```if / else if``` conditionals to control the flow of your application
        // Use the ```||``` operator in your conditionals to allow for 
        // multiple string values to execute ```if/else if``` statement code
        // If a user submits:

        // "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
        if(city === "New York" || city === "New York City" || city === "NYC") {
          return "nyc";

        // "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
        } else if(city === "San Francisco" || city === "SF" || city === "Bay Area") {
          return "sf";          

        // "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
        } else if(city === "Los Angeles" || city === "LA" || city === "LAX") {
          return "la";          

        // "Austin" or "ATX" make the background of the page austin.jpg
        } else if(city === "Austin" || city === "ATX") {
          return "austin";

        // "Sydney" or "SYD" make the background of the page sydney.jpg
        } else if(city === "Sydney" || city === "SYD") {
          return "sydney";
        }      
    }    
});
