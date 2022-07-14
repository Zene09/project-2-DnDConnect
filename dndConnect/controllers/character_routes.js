const express = require('express')

const router = express.Router()

const Character = require('../models/character/character-base')
const Race = require('../models/character/race')

router.get('/', (req, res) => {
    // test route:
    // res.send('Here are my characters')
    // mongoose find() finds a collection
    Race.find()
    .then(races => {
        res.render('character/index', { races })
    })
    .catch(err => {
        res.json(err)
    })
})

/////////////////
// export router to server.js
/////////////////
module.exports = router