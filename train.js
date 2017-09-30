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
});
// Config database
// set up Moment variables
// add train - onclick function (Database.ref().push())
// function should pull from the database a
// database.ref().orderByChild(dateAdded).on("child_added", function(snapshot){};
// set variables for our input( )
// display time (Moment.js)
// Calculating