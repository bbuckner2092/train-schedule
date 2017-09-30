// Initialize Firebase
var config = {
    apiKey: "AIzaSyABAu-dzVGcJtUNQcn5zQ6JVmVplmCruTY",
    authDomain: "gtfproject-9b069.firebaseapp.com",
    databaseURL: "https://gtfproject-9b069.firebaseio.com",
    projectId: "gtfproject-9b069",
    storageBucket: "",
    messagingSenderId: "298401273454"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var dest = "";
var train = "";
var freq = "";

var dataFormat = "MM/DD/YYYY";
var convertedDate = moment(train, dateFormat);

// Capture Button Click
$("#add-train").on("click", function(event) {
	event.preventDefault();

	// Grabbed values from text boxes
	name = $("#input-name").val().trim();
	dest = $("#input-destination").val().trim();
	train = $("#input-first-train-time").val().trim();
	freq = $("#input-frequency").val().trim();

	// Code for handling the push
	database.ref().push({
		name:name,
		dest: dest,
		train: train,
		freq: freq,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().dest);
	console.log(childSnapshot.val().train);
	console.log(childSnapshot.val().freq);
	console.log(childSnapshot.val().joinDate);

// full list of items to the well
$("#train-list").append("<div class='well'><span id='name'>" + childSnapshot.val().name + "</span><span> id='dest'> " + childSnapshot.val().dest + " </span><span id='train'> " + childSnapshot.val().train + "</span><span id='freq'> " childSnapshot.val().freq + "</span></div>");
// Config database
// set up Moment variables
// add train - onclick function (Database.ref().push())
// function should pull from the database a
// database.ref().orderByChild(dateAdded).on("child_added", function(snapshot){};
// set variables for our input( )
// display time (Moment.js)
// Calculating