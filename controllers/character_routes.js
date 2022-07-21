const express = require('express')
const router = express.Router()
// const fetch = require('node-fetch')

const Character = require('../models/character/character-base')
const Race = require('../models/character/race')
const Class = require('../models/character/class')

// delete all characters
router.delete('/', (req, res) => {
    const dndId = req.params.id

    Character.deleteMany({})
        .then(character => {
            res.redirect('/characters')
        })
        .catch(err => {
            res.json(err)
        })
})

// delete one character
router.delete('/:id', (req, res) => {
    const dndId = req.params.id

    Character.findByIdAndRemove(dndId)
        .then(character => {
            res.redirect('/characters')
        })
        .catch(err => {
            res.json(err)
        })
})


// GET route for displaying an update form
router.get('/:id/edit', (req, res) => {
    const dndId = req.params.id

    Character.findById(dndId)
        .then(character => {
            res.render('characters/edit', { character })
        })
        .catch(err => {
            res.json(err)
        })
})


// update
router.put('/:id', (req, res) => {
    const dndId = req.params.id

    req.body.alive = req.body.alive === 'on' ? true : false


    Character.findByIdAndUpdate(dndId, req.body, { new: true })
        .then(character => {
            console.log(character)
            res.redirect(`/characters/${character._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})


// create route - new character
// get the form for a new character
router.get('/new', async (req, res) => {
    const classes = await Class.find({})
    const races = await Race.find({})
    const characters = await Character.find({})
        .then(characters => {
            res.render('characters/new', { characters, races, classes })
        })
        .catch(err => {
            res.json(err)
        })
})
// post character to the db 
router.post('/', (req, res) => {
    req.body.alive = req.body.alive === 'on' ? true : false

    // Issue: All characters are still saying deceased, why?

    req.body.owner = req.session.userId
    Character.create(req.body)
        .then(character => {
            console.log(character)
            res.redirect('/characters')
        })
        .catch(err => {
            res.json(err)
        })
})

// TIP (from DnD API): there's a schema form for choices, use it


// index route
router.get('/', (req, res) => {
    
    // test route:
    // res.send('Here are my characters')
    // console.log(Race)
    // mongoose find() finds a collection
    Character.find({})
        .then(characters => {
            res.render('characters/index', { characters })
        })
        .catch(err => {
            res.json(err)
        })
    })

router.get('/my', (req, res) => {
    // find the fruits associated with the logged in user
    Character.find({ owner: req.session.userId })
        .then(characters => {
            res.render('characters/index', { characters })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})   

// show route - GOES LAST ; show one character at a time in detail
router.get('/:id', (req, res) => {
    const dndId = req.params.id

    Character.findById(dndId)
    // send back json
        .then(character => {
            // TODO: add in user specs after user routes created
            res.render('characters/show', { character })
        })
        .catch(err => {
            res.json(err)
        })
})










/////////////////////////////////////
// SEED ROUTES
/////////////////////////////////////
// // seed route for Races - COMPLETE
router.get('/seedRaces', (req, res) => {
    const startRaces = [
        {
            index: "dragonborn",
            name: "Dragonborn",
            url: "/api/races/dragonborn"
        },
        {
            index: "dwarf",
            name: "Dwarf",
            url: "/api/races/dwarf"
        },
        {
            index: "elf",
            name: "Elf",
            url: "/api/races/elf"
        },
        {
            index: "gnome",
            name: "Gnome",
            url: "/api/races/gnome"
        },
        {
            index: "half-elf",
            name: "Half-Elf",
            url: "/api/races/half-elf"
        },
        {
            index: "half-orc",
            name: "Half-Orc",
            url: "/api/races/half-orc"
        },
        {
            index: "halfling",
            name: "Halfling",
            url: "/api/races/halfling"
        },
        {
            index: "human",
            name: "Human",
            url: "/api/races/human"
        },
        {
            index: "tiefling",
            name: "Tiefling",
            url: "/api/races/tiefling"
        }
    ]
    Race.deleteMany({})
        .then(() => {
            Race.create(startRaces)
            .then(data => {
                res.json(data)
            })
            .catch(console.error)
        })
})

// seed route for classes - COMPLETE
router.get('/seedClasses', (req, res) => {
    const startClasses = [
        {
            index: "barbarian",
            name: "Barbarian",
            url: "/api/classes/barbarian"
        },
        {
            index: "bard",
            name: "Bard",
            url: "/api/classes/bard"
        },
        {
            index: "cleric",
            name: "Cleric",
            url: "/api/classes/cleric"
        },
        {
            index: "druid",
            name: "Druid",
            url: "/api/classes/druid"
        },
        {
            index: "fighter",
            name: "Fighter",
            url: "/api/classes/fighter"
        },
        {
            index: "monk",
            name: "Monk",
            url: "/api/classes/monk"
        },
        {
            index: "paladin",
            name: "Paladin",
            url: "/api/classes/paladin"
        },
        {
            index: "ranger",
            name: "Ranger",
            url: "/api/classes/ranger"
        },
        {
            index: "rogue",
            name: "Rogue",
            url: "/api/classes/rogue"
        },
        {
            index: "sorcerer",
            name: "Sorcerer",
            url: "/api/classes/sorcerer"
        },
        {
            index: "warlock",
            name: "Warlock",
            url: "/api/classes/warlock"
        },
        {
            index: "wizard",
            name: "Wizard",
            url: "/api/classes/wizard"
        }
    ]
    Class.deleteMany({})
    .then(() => {
        Class.create(startClasses)
        .then(data => {
            res.json(data)
        })
        .catch(console.error)
    })
})

/////////////////
// export router to server.js
/////////////////
module.exports = router