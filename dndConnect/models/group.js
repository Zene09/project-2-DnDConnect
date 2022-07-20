// // import dependencies
// const mongoose = require('./connection')
// const userSchema = require('./user')
// // keys to group model

// const { Schema, model } = mongoose

// // group schema

// const groupSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     user: [userSchema] // a user can be in many groups; sub docs of each other
// }, {
//     timestamps: true
// })

// // create a model from group
// const Group = model('Group', groupSchema)

// // export this schema
// module.exports = Group