// use the already connected mongoose from connection.js
const mongoose = require('../connection')
const Class = require('./class')
const Race = require('./race')

// TODO: add comment last


// Add keys into mongoose
const { Schema, model } = mongoose

const characterSchema = new Schema(
    {
        name: String,
        class: {
            type: Schema.Types.String,
            ref: 'Class',
            required: true,
        },
        level: Number,
        race: {
            type: Schema.Types.String,
            ref: 'Race',
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId, // a single user can have this character
            ref: 'User', // referencing user model
            required: true,
        },
        alive: Boolean,
        // TODO: add schemas after user and group are built
    },
    {
        timestamps: true,
    }
)

// make this into a model - characters
const Character = model('Character', characterSchema)

module.exports = Character