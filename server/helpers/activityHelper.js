var Yelp = require('yelp');


var yelpQuery = new Yelp ({

  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  token: process.env.token,
  token_secret: process.env.token_secret

})


yelpQuery.search({ location: req.query })
  .then(function(data) {
    data.businesses.forEach(function(business) {
      var businessEntry = {
        id: business.id,
        name: business.name,
        rating: business.rating,
        stars: business.rating_img_url_small,
        categories: business.categories,
        address: business.location.dispaly_address,
        image: business.image_url,
        description: business.snippet_text

      };
      console.log(businessEntry)
    })
  })
  .catch(function(err) {
    console.log('There was an error: ', err)
  })
