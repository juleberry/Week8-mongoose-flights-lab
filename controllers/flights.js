const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight.js');

// INDUCES -- if you put your routes in this order, it will never fail you!

// Index -- View of ALL ITEMS

router.get('/', (req, res) => { // Route is technically /flights because in server.js it is put as the base route for this controller
  // in here goes a Flight.find({}) to find all of your flights and then a res.render to show the view associated with them! (Index.jsx view)
  Flight.find({}, (error, allFlights) => {
    res.render('flights/Index', {
      flights: allFlights
    });
  })
})

// New -- Form to CREATE a new Item

router.get('flights/new', (req, res) => { // technically /flights/new
  // In here goes a res.render to show the 'create a new flight' form (New.jsx view)
  res.render('flights/New');
})

// Delete -- action to DELETE an item

// Update -- action to UPDATE an item

// Create -- action to CREATE a new item

router.post('/', (req, res) => { // technically /flights
  // In here goes your Flight.create(), passing your req.body to it, and res.redirect-ing to your index page.
  Flight.create(req.body, (error, createdFlight) => {
    res.redirect('../Index')
  })
})

// Edit -- Form to UPDATE an item

router.get('/:id/edit', (req, res) => {
  Flight.findOne({
    _id: req.params.id
  }, (error, foundFlight) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('/Edit', { flight: foundFlight });
    }
  })
});

// Show -- View of ONE ITEM
router.get('/flights/:id', (req, res) => {
  Flight.findOne({ _id: req.params.id }, (error, foundFlight) => {
    res.render('/Show', {
      flight: foundFlight
    });
  });
});

module.exports = router