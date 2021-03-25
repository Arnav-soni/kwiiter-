//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAuIs7sN3wbVclCr9AfzvGoTlBQaF1k9bI",
      authDomain: "kwitter-b70ae.firebaseapp.com",
      databaseURL: "https://kwitter-b70ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-b70ae",
      storageBucket: "kwitter-b70ae.appspot.com",
      messagingSenderId: "1077954342011",
      appId: "1:1077954342011:web:8f78514df5b07a046b86de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name - "+ Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names +"</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html" ;

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html" ; 
}