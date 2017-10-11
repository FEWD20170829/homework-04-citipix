$(function() {

// listen for click event
var city;

	$("#submit-btn").click(update);

  function update() {
    console.log("user clicked on update button");
    city = $("#city-type").val();

    console.log("city");

    if (city === "New York City" || city === "NYC" || city === "New York") {

      console.log("new york was selected");
      // $("container").attr("class", "nyc");
    } else {
      console.log("whatever");
    }
     //      $("container").attr("class", "nyc");



     //    } else if (city === "Los Angeles" || city === "LA" || city === "LAX") {

     //      console.log("los angeles was selected"); 
     //      $("container").attr("class", "la");

     //    } else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {

      //    console.log("San Francisco was selected");
      //   $("container").attr("class", "sf");

      // } else if (city === "Austin"|| city === "ATX") {

      //    console.log("Austin was selected");
      //   $("container").attr("class", "austin");

      // } else if (city === "Sydney" || city === "SYD")

      //    console.log("Sydney was selected");
      //   $("container").attr("class", "sydney");
      // }  
	}

	 // read data typed into city-type
    // store it into a variable "city"

	// var city = $("#city-type").val();
	// console.log ('The city entered into city-type field is ', typeof city);

	// //display the city-type image

	// $("#display").img("city-type");

	//  // if New York City is = city say New York City
 //    // if Los Angles is = city say Los Angeles
 //    // if San Francisco is = city say San Francisco
 //    // if Sydney is = city say Sydney 


	// if (city === "New York City" || city === "NYC" || city === "New York") {

 //      console.log("new york was selected");
 //      $("container").attr("class", "nyc");

 //    } else if (city === "Los Angeles" || city === "LA" || city === "LAX") {

 //      console.log("los angeles was selected"); 
 //      $("container").attr("class", "la");

 //    } else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {

	//    console.log("San Francisco was selected");
	//   $("container").attr("class", "sf");

	// } else if (city === "Austin"|| city === "ATX") {

	//    console.log("Austin was selected");
	//   $("container").attr("class", "austin");

	// } else if (city === "Sydney" || city === "SYD")

	//    console.log("Sydney was selected");
	//   $("container").attr("class", "sydney");
	// }  






	});