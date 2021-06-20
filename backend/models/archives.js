const mongoose = require('mongoose')

const archivesSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    stat : {
        type : String,
        required : true,
    }

})

module.exports = mongoose.model('archives', archivesSchema)