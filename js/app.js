$(function() {

// Add listener.
  $("#submit-btn").click(doStuff);

// Create function for clicking submit button.
  function doStuff() {
 
  // Read data typed into text field.
  // Store it in a variable.

    var city = $("#city-type").val();

  // Use if/else statements to identify possible city inputs.
  // Change background based on input.

    if (city === "New York" || city === "New York City" || city === "NYC") { 
      $("body").attr("class", "nyc");

    } else if (city === "SF" || city === "San Francisco" || city === "Bay Area") {
      $("body").attr("class", "sf");
  
    } else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
      $("body").attr("class", "la");
    
    } else if (city === "Austin" || city === "ATX") {
      $("body").attr("class", "austin");
  
    } else if (city === "Sydney" || city === "SYD") {
      $("body").attr("class", "sydney");
    }
    
  }

});