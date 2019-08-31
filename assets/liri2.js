require("dotenv").config();

var command = process.argv[2];
var search = process.argv.slice(3).join("");
var keys = require('./keys.js');

// spotify-this-songs:
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var getMeSpotify = function (songName) {
    if (songName === undefined) {
        songName = "What's my age again";
    }

    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                //   console.log(i);
                console.log("-----------*SPOTIFY_THIS_SONG*----------------");
                console.log("artist(s): " + songs[i].artists);
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

getMeSpotify("my heart goes on");


//movie this:

var axios = require("axios");
function movies() {
    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            // Then we print out the imdbRating
            console.log("----------------*MOVIE_THIS*-------------------");
            console.log("Title: " + response.data.Title);
            console.log("Rating: " + response.data.imdbRating);
            console.log("Year: " + response.data.Year);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("Country: " + response.data.Country);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("-----------------------------------");
        }
    )
}
movies("Titanic");

// concert-this:
var axios = require("axios");
var moment = require("moment");
function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(
        function (response) {
            // Printout results:
            console.log("----------------*CONCERT_THIS*-------------------");
            console.log("Name of the venue is: " + response.data.venue[0]);
            console.log("Venue of location is: " + response.data.venue["city"]);
            console.log("Date of the event is: " + moment(result.datetime).format("MM/DD/YY"));
            console.log("-----------------------------------");
            if (err) {
                // output err or do something with it
                console.log('failed to build transaction');
                console.log(err);
        
                // stop here.
                return;
            }
        
        }
    )
}
concertThis("BECK");

// Read file from random.txt:

function random() {
    var data = "";
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function (err) {
        if (err) {
            return console.log(err);
        } else{
            var ramdata = data.split(",");
            liriComSea(ramdata[0], ramdata[1]);
            console.log("-----------------------------------");
        }
    });
};
random();

// Serach & command function:
function liriComSea(command, search){

    switch (command) {
        case "concert-this":
            concertThis(search)
        break;
        
    case "spotify-this-song":
        getMeSpotify(search)
        break;
        
    case "do-what-it-says":
        random(search)
        break;
        
    case "movie-this":
        movies(search);
        break;
    default:
        console.log("search for three of these!!!!")
        console.log("-----------------*COMMAND-SEARCH*------------------");
    }
}
liriComSea();

// Needs to be done:

//  If no song is provided then your program will default to "The Sign" by Ace of Base.
//  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'