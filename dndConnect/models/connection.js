// configure dotenv
require('dotenv').config()

// call in mongoose to use
const mongoose = require('mongoose')

// declare database URI
const DATABASE_URI = process.env.DATABASE_URI
const MONGODB_URI = process.env.MONGODB_URI
// configure parsers for URL
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// now connect mongoDB to mongoose
mongoose.connect(MONGODB_URI, config)

// open and close db connection
mongoose.connection
    .on('open', () => console.log('Connected to Atlas'))
    .on('close', () => console.log('Disconnected from Atlas'))
    .on('error', err => console.error(err))

module.exports = mongoose