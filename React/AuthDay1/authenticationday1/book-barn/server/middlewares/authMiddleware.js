
const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {

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
            // continue with the original request  
            next() 
        } else {
            res.json({success: false, message: 'Unable to authenticate'})
        }
    } else {
        res.json({success: false, message: 'Required authorization headers are missing.'})
    }
}

module.exports = authenticate 