$(document).ready(function() {

    var cities=[{
        name: "Los Angeles",
        src: "images/la.jpg"
      },
      {
        name: "New York",
        src: "images/nyc.jpg"
      },
      {
        name: "Sydney",
        src: "images/sydney.jpg"
      }];

    cities.forEach(function(element, index) {
        console.log(element.name, index);

        $("#city-type").append("<option>" + element.name + "</option>");

    });

    $("#city-type").change(function() {
      var userEntry = $("#city-type").val();

      cities.forEach(function(element, index) {
        if( userEntry === element.name) {
          $('body').css('background-image', 'url(' + element.src + ')');
        }
      });

    });

});
