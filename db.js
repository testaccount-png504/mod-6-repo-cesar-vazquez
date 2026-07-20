const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://cesar:1212_865@cluster0.a2r4bf4.mongodb.net/?appName=Cluster0",{useNewURLParser: true})

module.exports = mongoose;