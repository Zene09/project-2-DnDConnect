// use the already connected mongoose from connection.js
const mongoose = require('../connection')


// TODO: add comment last
// ASK: can models, not Schema, be sub-docs? in reference to class and race

// Add keys into mongoose
const { Schema, model } = mongoose

const characterSchema = new Schema(
    {
        name: String,
        groups: {
            type: Schema.Types.ObjectId, // a single group can have this character
            ref: 'Group', // referencing group model
        },
        owner: {
            type: Schema.Types.ObjectId, // a single user can have this character
            ref: 'User', // referencing user model
        },
        alive: Boolean
        // TODO: add schemas after user and group are built
    },
    {
        timestamps: true,
    }
)

// make this into a model - characters
const Character = model('Character', characterSchema)