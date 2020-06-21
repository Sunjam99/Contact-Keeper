const mangoose = require('mangoose');
const  mongoose  = require('mongoose');

const UserSchema = mangoose.Schema({
    name:{
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique: true
    },
    password :{
        type: String,
        required : true
    },
    date : {
        type : Date,
        deafault : Date.now
    },
});

module.exports = mongoose.model('user', UserSchema);