const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;
const userRouter = require("./routes/ProjectRoute");
const pirateRouter = require("./routes/PirateRoute");
require("./configs/ProjectConfiguration")

app.use(cors()) // Enable cross site - Server and React
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api/user",userRouter); // Enable Routing
app.use("/api/pirate",pirateRouter); // Enable Routing

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})