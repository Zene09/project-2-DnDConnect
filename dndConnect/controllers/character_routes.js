const express = require('express')

const router = express.Router()

const Character = require('../models/character/character-base')

router.get('/', (req, res) => {
    // test route:
    res.send('Here are my characters')
    // mongoose find() finds a collection
    // Character.find({})
    // .then(characters => {
    //     res.render('character/index', { characters })
    // })
    // .catch(err => {
    //     res.json(err)
    // })
})

/////////////////
// export router to server.js
/////////////////
module.exports = router