// import dependencies
const mongoose = require('./connection')
const groupSchema = require('./group')
// keys to user model

const { Schema, model } = mongoose

// user schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    group: [groupSchema] // a user can be in many groups; sub docs of each other
}, {
    timestamps: true
})

// create a model from user
const User = model('User', userSchema)

// export this schema
module.exports = User