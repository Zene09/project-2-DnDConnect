// import dependencies for seed data
const mongoose = require('./connection')
const Race = require('./character/race')


// Seed Code //
// saving db connection variable for later use
const db = mongoose.connection


db.on('open', () => {
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
        // when we seed data, we usually clear out the db first
        Race.remove({})
        // then we create that data
            .then(deletedRaces => {
                console.log('this is what remove returns', deletedRaces)
    
                // now that our delete was successful, we can create our fruits
                Race.create(startRaces)
                    .then(data => {
                        console.log('the base races', data)
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