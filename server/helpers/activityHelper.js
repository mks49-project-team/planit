var Yelp = require('yelp');


var yelpQuery = new Yelp ({

  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  token: process.env.token,
  token_secret: process.env.token_secret

})


yelpQuery.search({ location: 'paris' })
  .then(function(data) {
    data.businesses.forEach(function(business) {
      var businessEntry = {};
      businessEntry.id = business.id
      businessEntry.name = business.name;
      businessEntry.rating = business.rating
      businessEntry.rating_img_url_small = business.rating_img_url_small;
      businessEntry.categories = business.categories;
      businessEntry.address = business.location.display_address;

      console.log(businessEntry)
    })

  })
  .catch(function(err) {
    console.log('There was an error: ', err)
  })