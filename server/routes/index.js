var express = require('express');
/* *
 *  Require your router here
 * */

var itineraryRouter = require('./itinerary.router').itineraryRouter;









var router = express.Router();

/* *
 *  Use your router here
 * */

router.use('/itinerary', itineraryRouter);







module.exports = {
  router: router
}
