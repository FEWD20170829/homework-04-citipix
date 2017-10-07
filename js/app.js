$(function () {

  // Listen for click
  $("#submit-btn").click(searchForCity);

  // Searches given input
  function searchForCity() {
    // Get the input from the search bar
    var city = $("#city-type").val();
    console.log("City: ", city);
    getCityPic(city);
  }

  // Helper function
  function getCityPic(searchInput) {
    var cleanedSearchInput = searchInput.trim().toLowerCase();
    console.log("seach: ", searchInput);
    console.log("clean: ", cleanedSearchInput);
    // "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    if (cleanedSearchInput === "new york" || cleanedSearchInput === "new york city" || cleanedSearchInput === "nyc") {
      $("body").attr('class', 'nyc');
    }
    // "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    else if (cleanedSearchInput === "san francisco" || cleanedSearchInput === "sf" || cleanedSearchInput === "bay area") {
      $("body").attr('class', 'sf');
    }
    // "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    else if (cleanedSearchInput === "los angeles" || cleanedSearchInput === "la" || cleanedSearchInput === "lax") {
      $("body").attr('class', 'la');
    }    
    // "Austin" or "ATX" make the background of the page austin.jpg
    else if (cleanedSearchInput === "austin" || cleanedSearchInput === "atx") {
      $("body").attr('class', 'austin');
    }
    // "Sydney" or "SYD" make the background of the page sydney.jpg
    else if (cleanedSearchInput === "sydney" || cleanedSearchInput === "syd") {
      $("body").attr('class', 'sydney');
    }
    // If no match, give an alert, remove background image, and clear the input
    else {
      alert("Sorry, we don't recognize input: " + searchInput + "\n Try again");
      $("body").removeAttr('class');
      clearInput();
    }
  }

  function clearInput() {
    $("#city-type").val("");    
  }

});