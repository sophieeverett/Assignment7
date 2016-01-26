//Run js when document has loaded//
$(document).ready(function() {

//Create an array containing the different city names and image links//
    var cities=[{
        name: "Los Angeles",
        src: "images/la.jpg"
      },
      {
        name: "New York",
        src: "images/nyc.jpg"
      },
      {
        name: "San Francisco",
        src: "images/sf.jpg"
      },
      {
        name: "Austin Texas",
        src: "images/austin.jpg"
      },
      {
        name: "Sydney",
        src: "images/sydney.jpg"
      }];

//Run through the array, and display the name string and index of each object in the console log//
    cities.forEach(function(element, index) {
        console.log(element.name, index);

//Add each name string to the option dropdown list.//
        $("#city-type").append("<option>" + element.name + "</option>");

    });

//make a new variable, and make that variable equal to the id 'city type'//
    $("#city-type").change(function() {
      var userEntry = $("#city-type").val();

//Run through the array. If the user selects one of the cities in the dropdown list change background image to element src//
      cities.forEach(function(element, index) {
        if( userEntry === element.name) {
          $('body').css('background-image', 'url(' + element.src + ')');
        }
      });

    });

});
