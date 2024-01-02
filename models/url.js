const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitedHistory: [{
        timestamp: {
            type: Number
        }
    }]
}, { timestamps: true})

const urlModel = mongoose.model("url", urlSchema)

module.exports = urlModel