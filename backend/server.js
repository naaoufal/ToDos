const express = require("express")
const cors = require('cors');
// const connectDB = require("./config/mongodb")
const mongoose = require("mongoose")
const app = express()
require('dotenv').config()

// connect to database with mongodb:
mongoose.connect("mongodb://localhost/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use(cors())


// declaring url endpoints :
app.use("/api/todos", require("./routes/todos"))
app.use("/api/archives", require("./routes/archives"))


// start the server
app.listen(3001, () => console.log("the server is started"))