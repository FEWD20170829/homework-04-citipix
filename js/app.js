$(function() {

  var cityEntered = ""

  // listen for a click event
  $("#submit-btn").click(doCityPix)

  // declare function that selects picture to display
  function doCityPix() {
    console.log('User clicked button');
    cityEntered = $("#city-type").val();
    console.log('cityEntered :', cityEntered);

    if (cityEntered == "San Francisco" || cityEntered == "SF" || cityEntered == "Bay Area") {
      console.log('Made it through the if statement with: ', cityEntered);
      $("body").css({
        'background-image': "url(images/sf.jpg)",
        'background-repeat': "no-repeat"
      });

    } else if  (cityEntered == "NYC" || cityEntered == "New York" || cityEntered == "New York City") {
      $("body").css({
        'background-image': "url(images/nyc.jpg)",
        'background-repeat': "no-repeat"
      });

    } else if (cityEntered == "LA" || cityEntered == "LAX" || cityEntered == "Los Angeles") {
      $("body").css({
        'background-image': "url(images/la.jpg)",
        'background-repeat': "no-repeat"
      });

    } else if (cityEntered == "Austin" || cityEntered == "ATX") {
      $("body").css({
        'background-image': "url(images/austin.jpg)",
        'background-repeat': "no-repeat"
      });

    } else if (cityEntered == "Sydney" || cityEntered == "SYD") {
      $("body").css({
        'background-image': "url(images/sydney.jpg)",
        'background-repeat': "no-repeat"
      });
    }
  }
  });





