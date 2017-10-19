$(function() {
  // var city;

  // listen for a click event on update button
  $("#submit-btn").click(doSomething);

  function doSomething() {
    var city = $("#city-type").val()
    changeBackground (city);
  }

  function changeBackground(city) {
    var lowercaseCity = city.toLowerCase();

    if (lowercaseCity === "nyc" || lowercaseCity === "new york city" || lowercaseCity === "ny" || lowercaseCity === "new york") {
      $("body").css("background-image", "url('images/nyc.jpg')");

    } else if (lowercaseCity === "austin" || lowercaseCity === "atx") {
      $("body").css("background-image", "url('images/austin.jpg')");

    } else if (lowercaseCity === "sf" || lowercaseCity === "sfo" || lowercaseCity === "san fran" || lowercaseCity === "bay area") {
      $("body").css("background-image", "url('images/sf.jpg')");

    } else if (lowercaseCity === "la" || lowercaseCity === "lax" || lowercaseCity === "los angeles") {
      $("body").css("background-image", "url('images/la.jpg')");

    } else if (lowercaseCity === "sydney" || lowercaseCity === "syd") {
      $("body").css("background-image", "url('images/sydney.jpg')");

    } else {
      $("body").css("background-image", "url('images/the_sun.jpg')");
    }

   }

});