$(function() {

// creat a click event for submit button

$("#submit-btn").click(changeCity);

// Create a function for the Submit buttom
function changeCity() {
  console.log("clicked on Submit button")
}

//call a variable using var and .val

var city = $("#city-type").val();

function changeBackground(changeCity)


// use else or else if when you type in city name
// specify lowercase/uppercase for the cities
// if() {
// } else if() {

if (city === "New York" || city === "NYC" || city === "New York City") {
  $('body').css('background-image', "url('images/nyc.jpg')");
  console.log("changed to NYC");
}

else if (city === "Los Angeles" || city === "LA") {
  $('body').css('background-image', "url('images/la.jpg')";
}

 else (city === "San Francisco" || city === "SF") { 
  $('body').css('background-image',"url('images/sf.jpg');
  console.log("Changed to SF");
}

  else (city === "Austin" || city "ATX") {
    $('body').css('background-image', "url('images/austin.jpg');
}
  else (city === "Sydney" || city "SYD") {
    $('body').css('background-image', "url(images/sydney.jpg");
}
  else {
    alert("Sorry no city to display");
  }


});