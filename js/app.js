// ready handler to delay function after DOM assets load
$(function() {

  // listen for click event to trigger application
  // to search for a city skyline image when the user 
  // clicks submit
  $("#submit-btn").click(searchCity);

  // define searchCity function - evaluates city and 
  // switches background
  function searchCity(event) {
    event.preventDefault();

    // remove any existing classes so the function 
    // can switch the background image via css classes
    $("body").removeClass();

    // define variable city
    var city

    // read .val() entered in the #city-type field to 
    // get a string value of user input,
    // change to lower case to ignore case of user entry
    city = $("#city-type").val().toLowerCase();

    // leverage if/else if/else statements to add class
    // based on user input stored in city variable, which will change 
    // background image corresponding to city input
    if (city === "new york city" || city === "new york" || city === "nyc") {
      $("body").addClass("nyc");
    }

    else if (city === "san francisco" || city === "sf" || city === "bay area") {
      $("body").addClass("sf");
    }

    else if (city === "los angeles" || city === "la" || city === "lax") {
      $("body").addClass("la");
    }

    else if (city === "austin" || city === "atx") {
      $("body").addClass("austin");
    }

    else if (city === "sydney" || city === "syd") {
      $("body").addClass("sydney");
    }

    else {
      $("body").addClass("citipix");
    }

  }


});