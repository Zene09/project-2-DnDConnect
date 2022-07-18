/////
// Import Dependencies
/////
const express = require('express')
const User = require('../models/user')

// add bcrypt to encrypt passwords
const bcrypt = require('bycryptjs')

/////
// create router
/////
const router = express.Router()

//////////
// list the routes
//////////
// two sign up routes
// one GET to show the form; one POST to make a db request

// GET user signup.liquid
router.get('/signup', (req, res) => {
    res.render('users/signup')
})

// POST user to the db
router.post('/signup', async (req, res) => {
    console.log('initial request', req.body)
    // async works best if a task requires load time
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )

    // after password encryption, create the user to put into the db
    console.log('after hashing password', req.body)
    User.create(req.body)
    // on success, redirect to the login page
        .then(user => {
        console.log('this is the new user', user)
        res.redirect('/users/login')
    })
    // on error
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

// create 2 login routes, GET and POST
// GET - shows the form
router.get('/login', (req, res) => {
    res.render('user/login')
})

// POST - logs user in and creates the session
router.post('/login', async (req, res) => {
    // look at the req object
    // destructure it from the req body
    const { username, password } = req.body
    console.log('this is the session', req.session)
    // find the user using mongoose.find()
    User.findOne({ username })
        .then(async (user) => {
            // check if the user exists then compare the passwords with an if statement
            // pass the user as the param
            if (user) {
                const result = await bcrypt.compare(password, user.password)

                if (result) {
                    
                }
            }
        })
})