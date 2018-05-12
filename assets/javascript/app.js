
// Regular form code ##############################33

$(document).ready(function () {  
 
  var database = Firebase_Database();
  //API key AIzaSyDxI6cMDI1nHohhOXMbQ7MUDi1GZKJ4KVM
  var city = "";
  var zip = "";
  var queryURL = "";

  $('#submit-button').on('click', function (event) {
    
      city = $('#city-input').val().trim();
      zip = $('#zipcode-input').val().trim();
      if(UserValidation(city, zip)){
        location.href = "./post-search.html";

        localStorage.setItem("city", city);
        localStorage.setItem("zipcode", zip);

        event.preventDefault();
    }
    else{
      event.preventDefault();
    }
  });

  function UserValidation(city, zip){
    if((city == "") && (zip.length != 5))
		{
      $('#modal2').modal('open');

  		return false;
		}
  	return true;
   };

  $('.materialboxed').materialbox();
  $('.fixed-action-btn').floatingActionButton();
  $('.carousel').carousel();
  $('.modal').modal();
  $('.sidenav').sidenav();

  var cityInput = localStorage.getItem("city");
  var zipcodeInput = localStorage.getItem("zipcode");

  //chat
  $('#send').on('click', function (chat) {
    var name = $('#nameInput').val();
    var message = $('#messageInput').val();

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

