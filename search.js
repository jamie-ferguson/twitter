const axios = require('axios');
const Twit = require('twit');
const config = require('./config.json')
const Twitter = new Twit(config);

// GitHub
axios.get('https://api.github.com/search/repositories', {
        params: {
            q: 'football',
            per_page: 10,
            sort: 'stars',
            order: 'desc'
        }
    })
    .then(function (response) {
        response.data.items.forEach(function(item, i){
            callTwitter(item.name, item.description);
        });
    })
    .catch(function (error) {
        console.log(error);
    });


// Twitter
function callTwitter(name, description){
    Twitter.get('search/tweets', {q:'#'+name, tweet_mode:'extended', count:100})
        .then(function (response) {
            var tweetArr = response.data.statuses.map( function(item) {
                return item.full_text;
            });

            var tweets = {
                name: name,
                description: description,
                tweets: tweetArr
            };

            console.log(JSON.stringify(tweets) + '\r\n');
        });
}
