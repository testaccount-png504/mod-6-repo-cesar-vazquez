const db = require("../db")

const song = db.model("song",{
    title:{type:String, required:true},
    artist: string,
    popularity: {type:Number, min:1, max:10},
    releaseDate: {type:Date, defualt:Date.now},
    genre: [string],
    


});

module.exports = song;