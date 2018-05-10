
// Regular form code ##############################33

$(document).ready(function () {
  console.log("Loading Document load");
  
 
  var database = Firebase_Database();

  //API key AIzaSyDxI6cMDI1nHohhOXMbQ7MUDi1GZKJ4KVM
  var city = "";
  var zip = "";
  var queryURL = "";

  $('#submit-button').on('click', function (event) {
    location.href = "./post-search.html";
    city = $('#city-input').val().trim();
    zip = $('#zipcode-input').val().trim();

    if (zip.length != 5) {
      alert("Enter a valid zipcode");
    };


    if (city.length === 0) {
      alert("Enter a valid city");
      return;
    };


    console.log(city);
    console.log(zip);

    localStorage.setItem("city", city);
    localStorage.setItem("zipcode", zip);


    event.preventDefault();
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

    chat.preventDefault();
  });
  function chat() {
    database.ref().on('child_added', function (childSnapshot, prevChildkey) {
      var sv = childSnapshot.val();
      $('#messageArea').prepend(('<h6>') + sv.name + ": " + sv.message);

    })
  };
  chat();




});//ready

