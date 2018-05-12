function Firebase_Database(){
    var config = {
        apiKey: "AIzaSyAIZCRtbY-yDsNgWwNYeK_i8J0OITsvWFM",
        authDomain: "adventurego-98977.firebaseapp.com",
        databaseURL: "https://adventurego-98977.firebaseio.com",
        projectId: "adventurego-98977",
        storageBucket: "adventurego-98977.appspot.com",
        messagingSenderId: "531553202185"
      };
      firebase.initializeApp(config);
      return firebase.database();
    }
