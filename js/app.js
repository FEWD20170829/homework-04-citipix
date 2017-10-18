$(function() {

$("#submit-btn").click(changeCity);

function changeCity() {

}

var city = $("#city-type").val();

function changeBackground(changeCity) {

  if (city === "New York" || city === "NYC" || city === "New York City") {
    $('body').css('background-image', "url('images/nyc.jpg')");
  }

  else if (city === "Los Angeles" || city === "LA") {
    $('body').css('background-image', "url('images/la.jpg')");
  }

   else if (city === "San Francisco" || city === "SF") { 
    $('body').css('background-image','url(images/sf.jpg)');
    console.log('push');
  }

    else if (city === "Austin" || city === "ATX") {
      $('body').css('background-image', 'url(images/austin.jpg)');
  }
    else if (city === "Sydney" || city === "SYD") {
      $('body').css('background-image', 'url(images/sydney.jpg)');
  }
    else {
      alert("Sorry no city to display");
    }
}
});