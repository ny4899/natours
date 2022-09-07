const express = require('express');

const {
  getAllTours,
  addNewTour,
  getTour,
  updateTour,
  deleteTour,
  handleFav,
} = require('../controller/tourController');

//Route handlers for tour

const router = express.Router();
// router.param('id', checkId);
router.route('/favicon.ico').get(handleFav);
router.route('/').get(getAllTours).post(addNewTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
