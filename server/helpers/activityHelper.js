var Yelp = require('yelp');


var yelpQuery = new Yelp ({

  consumer_key: 'AokJ1I73m9ZXRKsQwAFk3w',
  consumer_secret: 'RtuBaAZctDIRcvTKWBphtGeXVG0',
  token: 'L5Q9dkCBNNr-GwZDl81mliC8z5OtWJjr',
  token_secret: '5UIuf3CH89z_ODFJsfQA5RDoFLQ'

});


function yelpSearch(locationSearch, tripId) {
  var tripId = tripId;
  return yelpQuery.search({location: locationSearch})
    .then(function(data) {
      var businessEntry = [];
      console.log('this is the data baybay')
      data.businesses.forEach(function(business) {
        businessEntry.push({
          name: business.name,
          rating: business.rating,
          stars: business.rating_img_url_small,
          address: business.location.display_address,
          image: business.image_url,
          description: business.snippet_text,
          tripId: tripId

        });
      });
      return businessEntry;
    })
    .catch(function(err) {
      console.log('There was an error: ', err);
    });
};

module.exports = {
  yelpSearch: yelpSearch
};
