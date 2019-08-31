# Liri-node-app

LIRI will be a command line node app that takes in parameters and gives you back data.

### What it does ?

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events for an artist and render the following information about each event to the terminal:

     * Name of the venue
     * Venue location
     * Date of the Event (format as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:
   
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

### How users can get started with the project?

* Anyone can pull the repo or take code snipet. 
    * Then install necessary npm packages.
    * Run it in bash, and you good to go.

### Where users can get help with your project?

* Liri node app is like siri in iphone, it does what it is said. 