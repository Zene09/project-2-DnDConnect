const express = require('express')

const router = express.Router()

const Character = require('../models/character/character-base')
const Race = require('../models/character/race')
const Class = require('../models/character/class')

// index route
router.get('/', (req, res) => {
    // test route:
    // res.send('Here are my characters')
    // console.log(Race)
    // mongoose find() finds a collection
    Race.find({})
    .then(races => {
        res.send('here are the starting races')
    })
    .catch(err => {
        res.json(err)
    })
    console.log(Race)
})

/////////////////
// export router to server.js
/////////////////
module.exports = router