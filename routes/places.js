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
	const q = {};

	if (req.query.cuisine) {
		q.cuisine = req.query.cuisine;
	}

	if (req.query.location) {
		q.location = req.query.location;
	}

	Place.find(q, (err, places, count) => {
    if (err) {
      res.send({'error': 'This is an error'})
    }
    else {
      res.json(places.map(p => (
        {
          name: p.name,
          cuisine: p.cuisine,
          location: p.location,
        }
      )))
    }
  });
});

router.post('/places/create', (req, res) => {
	const r = {
		name: req.body.name,
		cuisine: req.body.cuisine,
		location: req.body.location,
	};
	const place = new Place(r);
	place.save(err => {
		res.json(place.toObject());
	});
});

module.exports = router;
