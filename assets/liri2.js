require("dotenv").config();


var command = process.argv[2];
var search = process.argv[3];
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
movies();

// what does it says:

// function doIt() {

//     var fs = require("fs");
//     fs.readFile("random.txt", "utf8", function (err) {
//         if (err) {
//             return console.log(err);
//         } else{
//             // Otherwise, it will print: "movies.txt was updated!"
//             console.log("movies.txt was updated!");
//         }
//     });
//     doIt();
// };

// Serach & command function:
switch (command) {
    case "concert-this":
        concertThis(search)
        break;

    case "spotify-this-song":
        getMeSpotify(search)
        break;

    case "do-what-it-says":
        doIt(search)
        break;

    case "movie-this":
        movies(search);
        break;
}

// concert-this:
var axios = require("axios");
var moment = require("moment");
function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(
        function (response) {
            // Printout results:
            console.log("Name of the venue is: " + response.data.venue[3]);
            console.log("Venue of location is: " + response.data.venue[1,0]);
            console.log("Date of the event is: " + moment(result.datetime).format("MM/DD/YY"));
            console.log("-----------------------------------");
        }
    )
}
concertThis();