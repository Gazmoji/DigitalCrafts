
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const app = express() 
const authenticate = require('./middlewares/authMiddleware')

app.use(cors())
app.use(express.json())

global.users = [{username: 'johndoe', password: 'password'}]

// protected route 
app.get('/api/movies', authenticate,(req, res) => {
    const movies = [{name: 'Movie 1'}, {name: 'Movie 2'}]
    res.json(movies)
})

// We need to protected this resource
// This means that client must pass in the token in the request 
// USE MIDDLEWARE INSTEAD OF Validating the token in the route 
app.get('/api/books', (req, res) => {

    const books = [{name: 'Book 1'}, {name: 'Book 2'}]

    // access the headers of the request 
    const header = req.headers['authorization']
    if(header) {
        // Bearer ejjsjsjsjsjjsjsjsj
        const token = header.split(' ')[1] // token 
        // decode the token 
        const decoded = jwt.verify(token, 'SECRETKEY')
        const username = decoded.username 
        // check if the username exists in the database 
        const authUser = users.find(user => user.username == username)
        if(authUser) {
            // token has been validated successfully 
            res.json(books)
        } else {
            res.json({success: false, message: 'Unable to authenticate'})
        }
    } else {
        res.json({success: false, message: 'Required authorization headers are missing.'})
    }

})

app.post('/api/login', (req, res) => {

    const username = req.body.username 
    const password = req.body.password 

    const user = users.find(user => user.username == username && user.password == password)

    if(user) {
        // user is authenticated successfully 
        // create a token 
        //jwt.sign({ foo: 'bar' }, 'shhhhh');
        // don't put anything sensitive in the token 
        // encoding is different from encryption 
        // This is encoding meaning it can be decoded 
        const token = jwt.sign({username: user.username}, 'SECRETKEY')
        res.json({success: true, token: token})
    } else {
        res.json({success: false, message: 'Unable to authenticate.'})
    }

})

app.listen(8080, () => {
    console.log('Server is running...')
})