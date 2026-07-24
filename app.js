const express = require("express")

const app = express()
const router = express.Router()

const bodyParser = require('body-parser')
const Song = require("./models/songs")
const cors = require('cors')

app.use(cors())


app.use(bodyParser.json())


router.get("/songs", async (req, res) => {
   try {
      const song = await Song.find({})
      console.log(song)
      res.send(song)
      console.log(song)
   }
   catch (err) {
      console.log(err)
   }
})

router.get("/songs/:id", async (req, res) => {
   try {
      const song = await Song.findById(req.params.id)
      res.json(song)
   }
   catch (err) {
      res.status(400).send(err)
   }
})

router.post("/songs", async (req, res) => {
   try {
      const song = new Song(req.body)
      await song.save()
      res.status(201).json(Song)
      console.log(Song)
   }
   catch (err) {
      console.error(err)
      res.status(400).send(err)

   }
})


// router.get("/song", function(req,res){
//    let query = {}
//    if(req.query.genre){
//       query = {genre : req.query.genre}
//    }

//    song.find(query,function(err,song){
//       if(err){
//          res.status(400).send(err)
//       }
//       else{
//          res.json(song)
//       }
//    })

// })

router.put("/songs/:id", async (req, res) => {
   try {
      const song = req.body
      await song.updateOne({ _id: req.params.id }, song)
      console.log(song)
      res.sendStatus(204)
   }
   catch (err) {
      res.status(400).send(err)
   }


})

app.use("/api", router)
app.listen(3000, () => {
   console.log("Server is running on port 3000")
})




