const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); // optional for unique
const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First Name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Date is required"]
    },

} , {timestamps: true});

// optional for unique
UserSchema.plugin(uniqueValidator,{message:"{PATH} is already registered!"})

// collection name in first Param , Wanted schema in second Param
const User = mongoose.model('User', UserSchema);
module.exports = User;
