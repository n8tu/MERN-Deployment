const Pirate = require("../models/PirateModel")

module.exports = {
    create: (request , response) => {
        if(request.body.position == "Captain"){
            Pirate.findOne({position:"Captain"})
                .then(pirate => {
                    if (pirate != null) {
                        response.status(400).json({
                            errors: {
                                unique: {message: "Crew cannot have more than 1 captain!"}
                            }
                        })
                    }else{
                        Pirate.create(request.body)
                            .then(pirate => response.json({
                                message: "Your pirate has been added successfully",
                                pirate:pirate,
                            }))
                            .catch(err => response.status(400).json(err))
                    }
                })
        }else{
            Pirate.create(request.body)
                .then(pirate => response.json({
                    message: "Your pirate has been added successfully",
                    pirate:pirate,
                }))
                .catch(err => response.status(400).json(err))
        }
    },
    all: (request , response) => {
        Pirate.aggregate([
            {
                "$project": {
                    "name": 1,
                    "_id":1,
                    "image":1,
                    "insensitive": { "$toLower": "$name" }
                }
            },
            { "$sort": { "insensitive": 1 } }
        ])
            .then(pirates => response.json({
                message: "Your pirates has been fetched successfully",
                pirates:pirates,
            }))
            .catch(err => response.status(400).json(err))
    },
    find: (request , response) => {
        Pirate.findOne({_id:request.params._id})
            .then(pirate => response.json({
                message: "Your pirate has been fetched successfully",
                pirate:pirate,
            }))
            .catch(err => response.status(400).json(err))
    },
    delete: (request , response) => {
        Pirate.deleteOne({_id:request.params._id})
            .then(() => response.json({
                message: "Your pirate has been deleted successfully",
            }))
            .catch(err => response.status(400).json(err))
    },
    peg: (request , response) => {
        Pirate.updateOne({_id:request.params._id},{peg_leg:request.body.peg_leg})
            .then(() => response.json({
                message: "Your pirate has been updated successfully",
            }))
            .catch(err => response.status(400).json(err))
    },
    eye: (request , response) => {
        Pirate.updateOne({_id:request.params._id},{eye_patch:request.body.eye_patch})
            .then(() => response.json({
                message: "Your pirate has been updated successfully",
            }))
            .catch(err => response.status(400).json(err))
    },
    hook: (request , response) => {
        Pirate.updateOne({_id:request.params._id},{hook_hand:request.body.hook_hand})
            .then(() => response.json({
                message: "Your pirate has been updated successfully",
            }))
            .catch(err => response.status(400).json(err))
    },
}