$(function() {

// listen for click event

	$("#submit-btn").click(Update);

	function Update() {
		console.log("user clicked on Update button")
	}

	 // read data typed into city-type
    // store it into a variable "city"

	var city = $("#city-type").val();
	console.log ('The city entered into city-type field is ', typeof city);

	//display the city-type image

	// $("#display").img("city-type");

	 // if New York City is = city say New York City
    // if Los Angles is = city say Los Angeles
    // if San Francisco is = city say San Francisco
    // if Sydney is = city say Sydney

	// if (city == New York City) {
 //      console.log("say New York City");
 //      $("container").attr("class", "nyc");
 //    } || else if (city == Los Angeles) {
 //      console.log("say Los Angeles"); 
 //      $("container").attr("class", "la");
 //    } || else if (city == San Francisco)
	//    console.log("say San Francisco");
	//   $("container").attr("class", "sf");
	// } || else if (city == Austin)
	//    console.log("say Austin");
	//   $("container").attr("class", "austin");
	// } || else if (city == Sydney)
	//    console.log("say Sydney");
	//   $("container").attr("class", "sydney");
	// }  


	if (city == New York City) {
      console.log("New York City"||"Los Angles"||"San Francisco"||"Austin"||"Sydney");
      $("container").attr("class", "nyc");
    } || else if (city == Los Angeles) {
      console.log("say Los Angeles"); 
      $("container").attr("class", "la");
    } || else if (city == San Francisco)
	   console.log("say San Francisco");
	  $("container").attr("class", "sf");
	} || else if (city == Austin)
	   console.log("say Austin");
	  $("container").attr("class", "austin");
	} || else if (city == Sydney)
	   console.log("say Sydney");
	  $("container").attr("class", "sydney");
	}  






	});