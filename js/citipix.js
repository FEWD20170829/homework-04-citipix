$(function(){

  // 1st I need to declare a variable so that whatever city is put in, i have storage for it

   var city;

   function getCity(){
    var city = $("#city-type").val();
    // i need to be able to see what the user put in, so this prints it
    console.log(city);

    
    
// when user clicks the button i want to run the getcity function above to get city value
          

    // now that he has clicked the button, it should generate a city
    
    // then I want the result to be read and to change the bgrnd image depending on what it is
    // i didnt put in any sydney options because it's like if all else fails...
     $("#submit-btn").click(getCity);
 

          if (city == "New York" || city == "New York City" || city == "NYC") {
          $('body').css("background-image","url(images/nyc.jpg");
        } 

         else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
          $('body').css("background-image","url(images/sf.jpg");
        }
        
        else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
         $('body').css("background-image","url(images/la.jpg");
         }

        else if (city == "Austin"|| city == "ATX") {
        $('body').css("background-image","url(images/austin.jpg");
        } 

        else {
          $('body').css("background-image","url(images/sydney.jpg");
        
        }
         

   }
   // added this again because once the bg has changed i want it poised to run again when button clicked

      $("#submit-btn").click(getCity);


  














});