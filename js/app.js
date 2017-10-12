//1. run code when page is loaded
$(function(){

  //2. listen for click event on submit button, call readInput function
  $('#submit-btn').click(readInput);

  //3. read search input and store in variable city
  function readInput(){
    console.log('clicked submit button');
    var city = $("#city-type").val();
    console.log('read city name'), city;

    //5. change background, pass city
    displayBackground(city);
  }

  function displayBackground(city){
    
    city = city.toLowerCase(); 

    //if search term is ny/nyc/new york change bkg to nyc.jpg
    if (city === "new york" || city === "new york city" || city === "nyc") {
      $("body").css('background-image', "url('images/nyc.jpg')");
    } 
    
    //if search term is atx/austin change bkg to austin.jpg
    else if (city === "austin" || city === "atx") {
      $("body").css('background-image', "url('images/austin.jpg')");
    } 

    //if search term is la/los angeles change bkg to la.jpg
    else if (city === "la" || city === "los angeles" || city === "lax") {
      $("body").css('background-image', "url('images/la.jpg')");
    } 

    else if (city === "sf" || city === "san francisco" || city === "bay area" || city === "san fran") {
      $("body").css('background-image', "url('images/sf.jpg')");
    } 

    else if (city === "sydney" || city === "syd") {
      $("body").css('background-image', "url('images/sydney.jpg')");
    }

    else {
      alert("Sorry, your city is not found.");
    }
  }
});