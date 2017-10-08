$(function(){


  //listen for a click event on the "update" button, when clicked, execute function "read"
  $('#submit-btn').click(read)



  //define function "read"
  function read() {
  //read the value in the city-type input box and store it as a variable  
    var city = $('#city-type').val();
  //call function to change the background of the page, using city as a parameter  
    changeBackground (city);
  }  

  
  //define function "changeBackground"
  function changeBackground(city){
  // if else flow to compare input city with available images
  //use .css to change background of body element 

  //New York
    if (city === "New York" || city === "NYC" || city === "New York City"){
      $('body').css("background-image","url(images/nyc.jpg)");
    }
  //San Francisco
    else if (city === "SF" || city === "San Francisco" || city === "Bay Area"){
      $('body').css("background-image","url(images/sf.jpg)");
    }
  //Los Angeles
    else if (city === "Los Angeles" || city === "LA" || city ==="LAX"){
      $('body').css("background-image","url(images/la.jpg)");
    }
  //Austin
    else if (city === "Austin" || city === "ATX"){
      $('body').css("background-image","url(images/austin.jpg)");
    }
  //Sydney
    else if (city === "Sydney" || city === "SYD"){
      $('body').css("background-image","url(images/sydney.jpg)");
    }

  }


});