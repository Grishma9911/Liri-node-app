# Liri-node-app

LIRI will be a command line node app that takes in parameters and gives you back data.

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from
