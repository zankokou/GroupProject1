
// Regular form code ##############################33

$(document).ready(function () {
    console.log("Loading Document load");
    /*
    //----->> THIS CODE IS MOVED TO DATABASE.JS
    var config = {
      apiKey: "AIzaSyAIZCRtbY-yDsNgWwNYeK_i8J0OITsvWFM",
      authDomain: "adventurego-98977.firebaseapp.com",
      databaseURL: "https://adventurego-98977.firebaseio.com",
      projectId: "adventurego-98977",
      storageBucket: "adventurego-98977.appspot.com",
      messagingSenderId: "531553202185"
    };
    firebase.initializeApp(config);
  
    var database = firebase.database();
    */
   var database = Firebase_Database();

    //API key AIzaSyDxI6cMDI1nHohhOXMbQ7MUDi1GZKJ4KVM
    var city = "";
    var zip = "";
    var queryURL = "";
  
    $('#submit-button').on('click', function (event) {
  
      city = $('#city-input').val().trim();
      zip = $('#zipcode-input').val().trim();
      console.log(city);
      console.log(zip);
  
      localStorage.setItem("city", city);
      localStorage.setItem("zipcode", zip);
  
      //event.preventDefault();
      });
  
    
    //materialize initialization functions
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.carousel').carousel();
    $('.modal').modal();
    $('.sidenav').sidenav();

  
    var cityInput = localStorage.getItem("city");
    var zipcodeInput = localStorage.getItem("zipcode");
  
    console.log("cityInput: " + cityInput);
    console.log("zip code Input: " + zipcodeInput);
  
    //chat
    $('#send').on('click', function (chat) {
      console.log('working');
      var name = $('#nameInput').val();
      var message = $('#messageInput').val();
      console.log(message);
  
      var newUser = {
        name: name,
        message: message
      };
  
      database.ref().push(newUser);
  
    });
    function chat() {
      database.ref().on('child_added', function (childSnapshot, prevChildkey) {
        var sv = childSnapshot.val();
        $('#messageArea').prepend(('<h6>') + sv.name + ": " + sv.message);
  
      })
    };
    chat();  
 //   initMap();
  });//ready
