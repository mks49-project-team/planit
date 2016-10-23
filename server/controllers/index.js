/* *
 *  Require your controller here
 * */

module.exports = {
  itineraryController: require('./itinerary.controller').itineraryController,
  activityController: require('./activity.controller').activityController,
  expediaController: require('./expedia.controller').expediaController,
  searchController: require('./search.controller').searchController,
  authController: require('./auth.controller').authController
};
