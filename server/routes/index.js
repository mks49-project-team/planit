var express = require('express');
/* *
 *  Require your router here
 * */

var itineraryRouter = require('./itinerary.router').itineraryRouter;

var activityRouter = require('./activity.router').activityRouter;

var searchRouter = require('./search.router').searchRouter;



var router = express.Router();

/* *
 *  Use your router here
 * */

router.use('/itinerary', itineraryRouter);
router.use('/activity', activityRouter);
router.use('/search', searchRouter);





module.exports = {
  router: router
}
