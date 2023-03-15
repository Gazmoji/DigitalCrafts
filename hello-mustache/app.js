// server side pages means that your server will return the complete page. 

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')

// setting up mustache as a templating engine 
app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

// This helps Express to parse form submitted values 
app.use(express.urlencoded())
// if a user goes to /trips then those routes will be handled by tripsRouter
app.use('/trips', tripsRouter)

// create an array of trips. Each trip will have a title property. 
// global means it will be available in other express routing files 
global.trips = [{tripId: 1, title: 'new Orleans'}, {tripId: 2, title: 'Denver'}]

// create a route/endpoint /trips/[city] and the page will display the name of the city passed in the url 
// /trips/houston and on the mustache page it should display houston 


/*


app.post('/add-trip', (req, res) => {
    
    const tripName = req.body.tripName 
    // creating a tripId based on the index of the array 
    let trip = { title: tripName, tripId: trips.length + 1}
    res.render('index')
})

*/


app.listen(8080, () => {
    console.log('Server is Running')
})


// movies/action/2023
// movies/kids/2022

// /movies/:genre/:year 

// And then on the index page display the genre and the year passed in the url. 