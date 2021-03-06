const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    video: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true })
module.exports = mongoose.model("Projects", projectSchema)