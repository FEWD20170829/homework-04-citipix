$(function() {
  // var city;

  // listen for a click event on update button
  $("#submit-btn").click(doSomething);

  function doSomething() {
    console.log("testing");
    var city = $("#city-type").val()
    changeBackground (city);
    // clear_field ();
  }

  function changeBackground(city) {
    var lowercaseCity = city.toLowerCase();

    if (lowercaseCity === "nyc" || lowercaseCity === "new york city" || lowercaseCity === "ny" || lowercaseCity === "new york") {
      console.log("new york picture")
      // background changes
      $("body").css("background-image", "url('images/nyc.jpg')");

    } else if (lowercaseCity === "austin" || lowercaseCity === "atx") {
      console.log ("austin picture")
      // background changes
      $("body").css("background-image", "url('images/austin.jpg')");

    } else if (lowercaseCity === "sf" || lowercaseCity === "sfo" || lowercaseCity === "san fran" || lowercaseCity === "bay area") {
      console.log ("sf picture")
      // background changes
      $("body").css("background-image", "url('images/sf.jpg')");

    } else if (lowercaseCity === "la" || lowercaseCity === "lax" || lowercaseCity === "los angeles") {
      console.log ("la picture")
      // background changes
      $("body").css("background-image", "url('images/la.jpg')");

    } else if (lowercaseCity === "sydney" || lowercaseCity === "syd") {
      console.log ("sydney picture")
      // background changes
      $("body").css("background-image", "url('images/sydney.jpg')");
    }
   }

  // function clear_field () {
  //   $("#update").val("");
  // }

});