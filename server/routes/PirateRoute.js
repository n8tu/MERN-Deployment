const router = require("express").Router();
const PirateController = require("../controllers/PirateController")


// Create a pirate in database
router.post("/new",PirateController.create)

// Get all pirates from database
router.get("/all",PirateController.all)

// Get a pirate from database
router.get("/find/:_id",PirateController.find)

// Delete a pirate from database
router.delete("/delete/:_id",PirateController.delete)

router.post("/peg/:_id",PirateController.peg)
router.post("/eye/:_id",PirateController.eye)
router.post("/hook/:_id",PirateController.hook)

module.exports = router;