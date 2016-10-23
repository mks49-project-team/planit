var express = require('express');
/* *
 *  Require your router here
 * */

var itineraryRouter = require('./itinerary.router').itineraryRouter;

var activityRouter = require('./activity.router').activityRouter;

var expediaRouter = require('./expedia.router').expediaRouter;

var searchRouter = require('./search.router').searchRouter;

var authRouter = require('./auth.router').authRouter;



var router = express.Router();

/* *
 *  Use your router here
 * */

router.use('/itinerary', itineraryRouter);
router.use('/activity', activityRouter);
router.use('/expedia', expediaRouter);
router.use('/search', searchRouter);
router.use('/auth', authRouter);




module.exports = {
  router: router
}
