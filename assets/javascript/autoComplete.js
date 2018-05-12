
$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCO9gxNVvg9CiM8dhQLlDsCpmsG5vylzBk&libraries=places&callback=initAutocomplete");

function initAutocomplete() {
/*
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.87, lng: -87.65},
        zoom: 15,
        mapTypeId: 'roadmap'
    });
*/
    var input = document.getElementById("city-input");
    var searchBox = new google.maps.places.SearchBox(input);
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
       }
    });

}
