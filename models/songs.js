const db = require("../db")

const song = db.model("song", {
    title: { type: String, required: true },
    artist: { type: String },
    popularity: { type: Number, min: 1, max: 10 },
    releaseDate: { type: Date, default: Date.now },
    genre: [{ type: String }],
});

song.init().then(() => {
    console.log("song model is ready")
})

module.exports = song;