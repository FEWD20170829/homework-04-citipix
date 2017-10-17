$(function() {

  $("#submit-btn").click(getPicture);


  function getPicture() {
   var city = $("#city-type").val();
 

 

   if (city == "New York" || city == "New York City" || city == "NYC") {
      $("body").css("background-image", "url(images/nyc.jpg");
   
   } else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
    $("body").css("background-image", "url(images/sf.jpg");

   } else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
    $("body").css("background-image", "url(images/la.jpg");

   } else if (city == "Austin" || city == "ATX") {
    $("body").css("background-image", "url(images/austin.jpg");

   } else if (city == "Sydney") {
    $("body").css("background-image", "url(images/sydney.jpg");

   } else {
     alert("No city to show here ¯|_(ツ)_/¯")
   }
    }
    

  
});