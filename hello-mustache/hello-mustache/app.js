// server side pages means that your server will return the complete page. 

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

// setting up mustache as a templating engine 
app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

app.get('/contact-us', (req, res) => {
    res.render('contact-us')
})

app.get('/', (req, res) => {
    let movie = { name: 'Spiderman', year: 2002 }
    // second argument to render is always an object 
    //res.render('index', { name: 'Spiderman', year: 2002 })
    // second argument to render is always an object 
    res.render('index', movie)
})

app.listen(8080, () => {
    console.log('Server is Running')
})
