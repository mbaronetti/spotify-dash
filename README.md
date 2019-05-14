# INTRO
This is a simple, easy-to-use and scalable React & Redux application consuming Spotify's API.
It renders artists and tracks based on user's input, along with custom information such as 'User's Currently Playing Track'

There are two parts to it, the server (auth-server), and the client(spotify-app).

![alt text](https://github.com/mbaronetti/spotify-dash/blob/master/preview.png "Preview")

## How to use

### 1) Set Up
- Download this project
- Visit https://developer.spotify.com/
- Log in and create an app
- Enter http//localhost:8888/callback as the redirect uri
- Save your changes
- Copy down the following information: Redirect uri, client id, client secret

### 2)  Server-side setup (Auth)
- Navigate to the auth-server directory `cd auth-server`
- Install the dependencies `npm install`
- Open auth-server/authorization_code/app.js in your editor
- Go to line 16
- Paste in the redirect uri, client id, and client secret you copied in step 1
- Run the Server `node authorization_code/app.js`

### 3)  Client-side setup
- Navigate to the client directory `cd spotify-app`
- Install the dependencies `npm install`
- Run the Server `npm start`

### 4)  Run App
- Visit http://localhost:3000
- Click 'Log in with Spotify' and log in
- To see 'User's Currently Playing Track' in action, open Spotify and play a song.
- Enjoy!

## Credits
For authentication, "web-api-auth-examples" was used.
https://github.com/spotify/web-api-auth-examples

For wrapping Spotify's API, "spotify-web-api-js" was used.
https://doxdox.org/jmperez/spotify-web-api-js