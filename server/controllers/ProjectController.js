const User = require("../models/ProjectModel")

module.exports = {
    create: (request , response) => {
        User.create(request.body)
            .then(user => response.json({
                message: "Your user has been registered successfully",
                user: user,
            }))
            .catch(err => response.status(400).json(err))
    },
    login: (request , response) => {
        User.findOne({email:request.body.email})
            .then(user => {
                if(user.password == request.body.password) {
                    response.json({
                        message: "Your login has been done successfully",
                        user: user,
                    })
                }else{
                    response.status(400).json({
                        errors: {
                            login: { message : "Email or password is incorrect"}
                        }
                    })
                }
            })
            .catch(err => response.status(400).json(err))
    },

}

