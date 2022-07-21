// import dependencies
const mongoose = require('../connection')
// keys to group model

const { Schema, model } = mongoose

// group schema

const choiceSchema = new Schema({
    choose: Number,
    type: String,
    from: {
        type: Schema.Types.ObjectId, // pulling id from seeded db
        ref: 'Race'
    },
    from: {
        type: Schema.Types.ObjectId, // pulling id from seeded db
        ref: 'Class'
    },
}, {
    timestamps: true
})

// create a model from group
const Choice = model('Choice', choiceSchema)

// export this schema
module.exports = Choice