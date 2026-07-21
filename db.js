const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/songs")

module.exports = mongoose;