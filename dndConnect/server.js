/////////////////////////////////
// import dependencies
/////////////////////////////////
// this allows us to load our env variables
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const characterRoutes = require('./controllers/character_routes')
const userRoutes = require('./controllers/user_routes')

////////////////////////////////////////////
// Create our express application object
////////////////////////////////////////////
const app = require('liquid-express-views')(express())


////////////////////////////////////////////
// Middleware
////////////////////////////////////////////
// this is for request logging
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
// parses urlencoded request bodies
app.use(express.urlencoded({ extended: false }))
// to serve files from public statically
app.use(express.static('public'))
// bring in our session middleware
const session = require('express-session')
const MongoStore = require('connect-mongo')

// here's the middleware that sets up our sessions
app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use('/characters', characterRoutes)
app.use('/users', userRoutes)
// set up server to let me know it is running
// localhost:3000/
app.get('/', (req, res) => {
	// res.send('"Can we please play D&D now?" - Will Byers, Stranger Things Season 3') // route works!
    res.redirect('/characters')
})

////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})