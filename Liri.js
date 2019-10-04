// Dependency for dotenv npm package
require("dotenv").config();

var keys = require("./keys.js");
// Dependency for node-spotify-api npm package
var Spotify = require('node-spotify-api');
 
// Dependency for inquirer npm package
var inquirer = require("inquirer");

// Constructor function for creating LIRI objects
function Liri(concert,song,movie){
this.concert;
this.song;
this.movie;


this.bandsInTown = function (){
    let artist = process.argv[2];

let band = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
}


}
bandsInTown();