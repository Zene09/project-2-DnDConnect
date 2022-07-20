// seed this array to query using mongoose .find()
const mongoose = require('../connection')

const { Schema, model } = mongoose

const raceSchema = new Schema(
    {
        index: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        url: String
    }, {
        timestamps: true
    }
)
const Race = model('Race', raceSchema)

module.exports = Race



// /{
//     "_id": "62d0af8bcf4b1feefb4b9e31",
//     "index": "dragonborn",
//     "name": "Dragonborn",
//     "url": "/api/races/dragonborn",
//     "createdAt": "2022-07-15T00:06:35.813Z",
//     "updatedAt": "2022-07-15T00:06:35.813Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e32",
//     "index": "dwarf",
//     "name": "Dwarf",
//     "url": "/api/races/dwarf",
//     "createdAt": "2022-07-15T00:06:35.814Z",
//     "updatedAt": "2022-07-15T00:06:35.814Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e33",
//     "index": "elf",
//     "name": "Elf",
//     "url": "/api/races/elf",
//     "createdAt": "2022-07-15T00:06:35.814Z",
//     "updatedAt": "2022-07-15T00:06:35.814Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e36",
//     "index": "half-orc",
//     "name": "Half-Orc",
//     "url": "/api/races/half-orc",
//     "createdAt": "2022-07-15T00:06:35.815Z",
//     "updatedAt": "2022-07-15T00:06:35.815Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e37",
//     "index": "halfling",
//     "name": "Halfling",
//     "url": "/api/races/halfling",
//     "createdAt": "2022-07-15T00:06:35.815Z",
//     "updatedAt": "2022-07-15T00:06:35.815Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e38",
//     "index": "human",
//     "name": "Human",
//     "url": "/api/races/human",
//     "createdAt": "2022-07-15T00:06:35.815Z",
//     "updatedAt": "2022-07-15T00:06:35.815Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e39",
//     "index": "tiefling",
//     "name": "Tiefling",
//     "url": "/api/races/tiefling",
//     "createdAt": "2022-07-15T00:06:35.816Z",
//     "updatedAt": "2022-07-15T00:06:35.816Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e34",
//     "index": "gnome",
//     "name": "Gnome",
//     "url": "/api/races/gnome",
//     "createdAt": "2022-07-15T00:06:35.814Z",
//     "updatedAt": "2022-07-15T00:06:35.814Z",
//     "__v": 0
//     },
//     {
//     "_id": "62d0af8bcf4b1feefb4b9e35",
//     "index": "half-elf",
//     "name": "Half-Elf",
//     "url": "/api/races/half-elf",
//     "createdAt": "2022-07-15T00:06:35.815Z",
//     "updatedAt": "2022-07-15T00:06:35.815Z",
//     "__v": 0
//     }

