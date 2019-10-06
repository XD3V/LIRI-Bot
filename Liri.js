// Dependency for dotenv npm package
require("dotenv").config();

let keys = require("./keys.js");
// Dependency for node-spotify-api npm package
let Spotify = require("node-spotify-api");

// Dependency for inquirer npm package
let inquirer = require("inquirer");

// Constructor function for creating LIRI objects
function Liri(concert, artist, song, movie) {
  this.concert = concert;
  this.song = song;
  this.movie = movie;
  this.artist = artist;

  // creating a new method called BandsInTown.This intels if the user wants to either listen to somone or not.
  this.bandsInTown = function() {
    // this is stating if the user wants to input a artist then it goes through the code.
    if (this.artist === true)
      console.log("/nHere is the artist you were looking for ");
    let band =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";
  };

 
}

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "\nWhat is your name?",
        name: "username"
      },
      {
        type: "list",
        message: "\nWould you like to choose a Music or a Movie\n",
        choices: ["Music", "Movie"],
        name: "list"
      },
      {
        type: "confirm",
        message: "\nAre you sure:\n",
        name: "confirm",
        default: true
      }
    ])
    .then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.confirm === true) {
        console.log("\nWelcome " + inquirerResponse.username + "\n" +
        "Please enter a artist or a movie you would like to hear\n ");
      }
      if (inquirerResponse.confirm === false) {
          console.log("\n")
        mainMenu();
      }
    });
    
}

  function Bandinfo (){
    this.movieInfo = function(){
      let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    }  
    .then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.confirm === true) {
        console.log("\nWelcome " + inquirerResponse.username + "\n" +
        "Please enter a artist or a movie you would like to hear\n ");
      }
      if (inquirerResponse.confirm === false) {
          console.log("\n")
        mainMenu();
      }
    });
  }

mainMenu();

