const express = require("express")
const cors = require('cors');
const connectDB = require("./back_end/config/mongodb")
const app = express()

// connect to database with mongodb:
connectDB()

app.use(express.json())
app.use(cors())


// declaring url endpoints :
app.use("/api/admins", require("./back_end/routes/admins"))
app.use("/api/tags", require("./back_end/routes/tags"))
app.use("/api/staffs", require("./back_end/routes/staffs"))
app.use("/api/clients", require("./back_end/routes/clients"))


// start the server
app.listen(3001, () => console.log("the server is started"))