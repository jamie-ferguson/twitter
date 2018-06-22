# SportDec

This application was developed and tested on a mac OS 10.13 (High Sierra) running node v10.2.0 and npm v6.1.0
After downloading a few set-up steps have to be taken...

1. Run node install in the root directory.
2. Add your Twitter keys to a config.js file.
{
    "consumer_key":"",
    "consumer_secret":"",
    "access_token":"",
    "access_token_secret":""
}

Running the app should output JSON for 10 GitHub apps and a maximum of 100 tweets/retweets for each  
$ node search.js
or
$ npm start
