const Archives = require('../models/archives')
require('dotenv').config()

// get all todos :
async function all (req, res) {
    try {
        const archives = await Archives.find()
        res.json(archives)
    } catch (error) {
        res.json({message : error.message})
    }
}

// Create new todo list :
async function createOne (req, res) {
    const archive = new Archives({
        name : req.body.name,
        stat : "archive"
    })
    try {
        const newArchive = await archive.save()
        res.json(newArchive)
    } catch (err) {
        res.json({message : err.message})
    }
}

module.exports = {
    all,
    createOne
}