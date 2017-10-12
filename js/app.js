$(function(){
  var searchTerm;
  var resultcity;

  $('#submit-btn').click(readInput);

  function readInput(){
    console.log('clicked submit button');
    searchTerm = $('#city-type').val();
    console.log('read city name'), searchTerm;
  }

  function match_searchTerm(searchTerm) {
    if (searchTerm === "New York" || searchTerm === "New York City" || searchTerm === "NYC") {
      console.log("search term new york");
      function displayBackground (){
      console.log('change background');
      $("body").css('background-image', 'url(images/nyc.jpg');
    
    } else if (searchTerm === "Austin" || searchTerm === "ATX") {
      console.log("search term austin");
      function displayBackground (){
      console.log('change background');
      $("body").css('background-image', 'url(images/austin.jpg');
    
    } else if (searchTerm === "LA" || searchTerm === "Los Angeles" || searchTerm === "LAX") {
      console.log("search term LA");
      function displayBackground (){
      console.log('change background');
      $("body").css('background-image', 'url(images/la.jpg');

    } else if (searchTerm === "SF" || searchTerm === "San Francisco" || searchTerm === "Bay Area") {
      console.log("search term SF");
      function displayBackground (){
      console.log('change background');
      $("body").css('background-image', 'url(images/sf.jpg');

    } else (searchTerm === "Sydney" || searchTerm === "SYD") {
      console.log("search term Sydney");
      function displayBackground (){
      console.log('change background');
      $("body").css('background-image', 'url(images/sydney.jpg');
    }
  //   displayBackground();

  // function displayBackground (searchTerm){
  //     console.log('change background');
  //     $("body").css('background-image', 'url(images/nyc.jpg');
  //   }

});