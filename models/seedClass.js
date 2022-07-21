// import dependencies for seed data
const mongoose = require('./connection')
const Class = require('./character/class')

// Seed Code //
// saving db connection variable for later use
const db = mongoose.connection

db.on('open', () => {
    // array of starter information
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

        // when we seed data, we usually clear out the db first
        Class.remove({})
        // then we create that data
            .then(deletedClasses => {
                console.log('this is what remove returns', deletedClasses)
    
                // now that our delete was successful, we can create our fruits
                Class.create(startClasses)
                    .then(data => {
                        console.log('the base classes', data)
                        db.close()
                    })
                    .catch(error => {
                        console.log('error:', error)
                        db.close()
                    })
            })
            .catch(error => {
                console.log('error:', error)
                db.close()
            })
        // whether it's successful or not, we want to close our db connection
    })
