const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Bring in mongoose model, Place, to represent a restaurant
const Place = mongoose.model('Place');

// TODO: create two routes that return json
// GET /api/places
// POST /api/places/create
// You do not have to specify api in your urls
// since that's taken care of in app.js when
// this routes file is loaded as middleware
router.get('/places', (req, res) => {
  Place.find({}, function(err, places, count) {
    res.json(places.map(function(ele) {
      return {
        'name': ele.name,
        'cuisine': ele.cuisine,
        'location': ele.location,
      };
    }));
  });
});

router.post('/places/create', (req, res) => {
  const name = req.body.name;
  const cuisine = req.body.cuisine;
  const location = req.body.location;
});


module.exports = router;
