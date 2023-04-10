const express = require('express')
const router = express.Router()

// /trips -> index page 
router.get('/', (req, res) => {
    res.render('index', { trips: trips})
})

// trips/:city -> trip-details 
router.get('/:cityName', (req, res) => {
    console.log(req.params.cityName) 
    res.render('trip-details', { nameOfTheCity: req.params.cityName })
   //res.render('trip-details', { city: cityName })
})

router.post('/delete-trip', (req, res) => {
    // get the trip id from the body 
    const tripId = req.body.tripId 
    // delete the trip from trips array with the same tripId 
    trips = trips.filter(trip => trip.tripId != tripId)
    res.redirect('/trips')
})

// add-trip POST 

// delete-trip POST 

 // now other files can import router 
module.exports = router 
 