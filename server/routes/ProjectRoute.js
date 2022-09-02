const router = require("express").Router();
const ProjectController = require("../controllers/ProjectController")


// create user in database
router.post("/register",ProjectController.create)

// login user
router.post("/login",ProjectController.login)

module.exports = router;