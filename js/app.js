$(function () {

  //listen for click event
  //Use ```$.click``` to trigger the application to conduct a city search when the user clicks the "submit" button
  $("#submit-btn").click(citySearch);

    function citySearch() {

        //Call ```$.val()``` on inputs to get the string value of your user's input
        //Store user input in a variable called ```city```
        var city = $("#city-type").val(); 

        console.log(city, typeof city);

        //Create ```if / else if``` conditionals to control the flow of your application
        //Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
        //If a user submits:
        // - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
        // - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
        // - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
        // - "Austin" or "ATX" make the background of the page austin.jpg
        // - "Sydney" or "SYD" make the background of the page sydney.jpg

        

    }




});
