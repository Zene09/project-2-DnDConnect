const express = require('express')

const router = express.Router()

const Character = require('../models/character/character-base')
const Race = require('../models/character/race')
const Class = require('../models/character/class')

// create route - new character
// get the form for a new character
router.get('/new', (req, res) => {
    res.render('characters/new')
})
// post character to the db 
// TODO: need to assign all required schema fields before creating a new character
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