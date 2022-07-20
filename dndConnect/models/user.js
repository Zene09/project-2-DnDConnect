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

// make a user model with the userSchema
const User = model('User', userSchema)

///////////////////////////////////////
// export our user model
///////////////////////////////////////
module.exports = User

/*
test user - delete after group works
  username: 'Zene',
  password: '$2a$10$p5a0iKLLYFNLmnbth7MAKOhNLa/1k9tDYXHVgZakwLHlzfXgj3Mdi', (actually 2300)
  group: [],
  _id: new ObjectId("62d5ce1721d09536d8b2bcc3"),
  createdAt: 2022-07-18T21:18:15.699Z,
  updatedAt: 2022-07-18T21:18:15.699Z,
  __v: 0
*/