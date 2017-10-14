 // wait until the document is ready

 $(function() {

  // when someone hits submit, run the fucntion showCity

$("form").submit(showCity);


function showCity(event) {
  event.preventDefault();


    var city = $("#city-type").val();
  

    // read data typed into city-type
    // store it into a variable "city"


    // if New York City is = city say New York City
    // if Los Angles is = city say Los Angeles
    // if San Francisco is = city say San Francisco
    // if Sydney is = city say Sydney 

    if (city === "New York" || city === "NYC" || city === "New York City" || city === "nyc") {
      $("#starter-image").attr("class","nyc");

    } else if (city === "San Francisco" || city == "Bay Area" || city == "san francisco"|| city == "SF") {
      $("#starter-image").attr("class","sf");

    } else if (city == "Los Angeles" || city == "LA" || city == "los angeles" || city == "LA") {
      $("#starter-image").attr("class","ls");

    } else if (city == "Austin" || city == "ATX" || city == "austin") {
      $("#starter-image").attr("class","austin");

    } else if (city == "Sydney" || city == "SYD" || city == "sydney") {
      $("#starter-image").attr("class","sydney");
    
    } else {
      $("body").addClass("starter-image")
      alert("Oops, we don't have that picture!")
      //in case the user enters something that doesn't have a picture
    }
  }  


	
});