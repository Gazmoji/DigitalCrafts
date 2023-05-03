
const express = require('express')
const app = express() 
const cors = require('cors')
const jwt = require('jsonwebtoken');
const authenticate = require('./middlewares/authMiddleware')

// middleware 
app.use(cors())
app.use(express.json())

global.users = [{username: 'johndoe', password: 'password'}, {username: 'marydoe', password: 'password'}]

const movies = [{name: 'Batman', year: 2023}, {name: 'Spiderman', year: 2022}, {name: 'Superman', year: 2021}]

// PROTECTED ROUTE/RESOURCE
app.get('/api/movies', authenticate, (req, res) => {
    res.json(movies)
})

// PROTECTED ROUTE/RESOURCE
app.post('/api/movies', authenticate, async (req,res) => {
    
    const name = req.body.name
    const year = parseInt(req.body.year) 

    const movie = {
        name: name,
        year: year
    } 
    
    /* const movie = { name, year } */

    movies.push(movie)
    res.json({ success: true })
})

app.post('/api/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    // When you are using database then you will have to use bcrypt to compare the hashed password 
    const user = users.find(user => user.username == username && user.password == password)

    if(user) {
        // create a token. Tokens are encoded this means they can be decoded easily. 
        // move SECRETKEY into dotenv. You don't want others to see it on GitHub. 
        const token = jwt.sign({ username: username }, 'SECRETKEY');
        // return token to the client 
        res.json({success: true, token: token})
    } else {
        res.status(401).json({success: false, message: 'Invalid credentials.'})
    }

})


app.listen(8080, () => {
    console.log('Server is running...')
})