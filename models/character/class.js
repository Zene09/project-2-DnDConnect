// seed this array to query using mongoose .find()
const mongoose = require('../connection')

const { Schema, model } = mongoose

const classSchema = new Schema(
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
const Class = model('Class', classSchema)

module.exports = Class


    // "_id": "62d0b3c177aadc0e84e36a7d",
    // "index": "barbarian",
    // "name": "Barbarian",
    // "url": "/api/classes/barbarian",
    // "createdAt": "2022-07-15T00:24:33.868Z",
    // "updatedAt": "2022-07-15T00:24:33.868Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a7e",
    // "index": "bard",
    // "name": "Bard",
    // "url": "/api/classes/bard",
    // "createdAt": "2022-07-15T00:24:33.870Z",
    // "updatedAt": "2022-07-15T00:24:33.870Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a7f",
    // "index": "cleric",
    // "name": "Cleric",
    // "url": "/api/classes/cleric",
    // "createdAt": "2022-07-15T00:24:33.870Z",
    // "updatedAt": "2022-07-15T00:24:33.870Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a82",
    // "index": "monk",
    // "name": "Monk",
    // "url": "/api/classes/monk",
    // "createdAt": "2022-07-15T00:24:33.871Z",
    // "updatedAt": "2022-07-15T00:24:33.871Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a83",
    // "index": "paladin",
    // "name": "Paladin",
    // "url": "/api/classes/paladin",
    // "createdAt": "2022-07-15T00:24:33.871Z",
    // "updatedAt": "2022-07-15T00:24:33.871Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a84",
    // "index": "ranger",
    // "name": "Ranger",
    // "url": "/api/classes/ranger",
    // "createdAt": "2022-07-15T00:24:33.871Z",
    // "updatedAt": "2022-07-15T00:24:33.871Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a85",
    // "index": "rogue",
    // "name": "Rogue",
    // "url": "/api/classes/rogue",
    // "createdAt": "2022-07-15T00:24:33.872Z",
    // "updatedAt": "2022-07-15T00:24:33.872Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a86",
    // "index": "sorcerer",
    // "name": "Sorcerer",
    // "url": "/api/classes/sorcerer",
    // "createdAt": "2022-07-15T00:24:33.872Z",
    // "updatedAt": "2022-07-15T00:24:33.872Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a87",
    // "index": "warlock",
    // "name": "Warlock",
    // "url": "/api/classes/warlock",
    // "createdAt": "2022-07-15T00:24:33.872Z",
    // "updatedAt": "2022-07-15T00:24:33.872Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a88",
    // "index": "wizard",
    // "name": "Wizard",
    // "url": "/api/classes/wizard",
    // "createdAt": "2022-07-15T00:24:33.873Z",
    // "updatedAt": "2022-07-15T00:24:33.873Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a80",
    // "index": "druid",
    // "name": "Druid",
    // "url": "/api/classes/druid",
    // "createdAt": "2022-07-15T00:24:33.870Z",
    // "updatedAt": "2022-07-15T00:24:33.870Z",
    // "__v": 0
    // },
    // {
    // "_id": "62d0b3c177aadc0e84e36a81",
    // "index": "fighter",
    // "name": "Fighter",
    // "url": "/api/classes/fighter",
    // "createdAt": "2022-07-15T00:24:33.871Z",
    // "updatedAt": "2022-07-15T00:24:33.871Z",
    // "__v": 0


