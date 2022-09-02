const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const PirateSchema = new mongoose.Schema({

    name: {
        type:String,
        required:[true,"Pirate Name is required!"]
    },
    image: {
        type:String,
        required:[true,"Image url is required!"]
    },
    treasures: {
        type:Number,
        required:[true,"Treasures is required!"]
    },
    position: {
        type:String,
        required:[true,"Position is required!"]
    },
    pirate_catch: {
        type:String,
        required:[true,"Pirate Catch is required!"]
    },
    peg_leg: {
        type:Boolean,
        default:true,
    },
    eye_patch: {
        type:Boolean,
        default:true,
    },
    hook_hand: {
        type:Boolean,
        default:true,
    }

} , {timestamps: true});

// optional for unique
PirateSchema.plugin(uniqueValidator,{message:"{PATH} is already registered!"})
// collection name in first Param , Wanted schema in second Param
const Pirate = mongoose.model('Pirates', PirateSchema);
module.exports = Pirate;