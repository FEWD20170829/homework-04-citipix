// wait to run code until page is fully loaded
$(function() { 

  // listen for a click on the update button then call a function
  $("#submit-btn").click(doSomething); 

  // read content from city-type input field and store string as variable "city" 
  function doSomething() {
    var city = $("#city-type").val();
    changeBackground(city); // call change background function and pass it the variable city
  }

  // evaluate city and change background
  function changeBackground(city){ 

    city = city.toLowerCase(); // to ignore case

    // "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    if (city === "new york" || city === "new york city" || city === "nyc") {
      $("body").css('background-image',"url('images/nyc.jpg')");
    } 

    // "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    else if (city === "san francisco" || city === "bay area" || city === "sf") {
      $("body").css('background-image',"url('images/sf.jpg')");
    } 

    // "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    else if (city === "los angeles" || city === "la" || city === "lax") {
      $("body").css('background-image',"url('images/la.jpg')");
    }

    // "Austin" or "ATX" make the background of the page austin.jpg
    else if (city === "austin" || city === "atx") {
      $("body").css('background-image',"url('images/austin.jpg')");
    }

    // "Sydney" or "SYD" make the background of the page sydney.jpg  
    else if (city === "sydney" || city === "syd") {
      $("body").css('background-image', "url('images/sydney.jpg')");
    }

    else {
      alert("I'm sorry, your city is not supported yet");
    }
  }
});