const express = require("express")

const app = express()

const router = express.Router()

const bodyParser = require('body-parser')

const song = require("./models/songs")
const song = require("./models/songs")

var cors = require('cor')

app.use(cors())


app.use(bodyParser.json())
const router = express.router()


router.get("/song", async(req,res)=>{
   try{
      const song = await song.find({})
      res.send(song)
      console.log(song)
   }
   catch (err){
      console.log(err)
   }
})

router.get("/song/:id", async (req, res) =>{
   try{
      const song = await song.findById(req.params.id)
      res.json(song)
   }
   catch(err){
      res.status(400).send(err)
   }
})

router.post("/song", async(req,res)=>{
   try{
      const songs = new song(req.body)
      await song.save()
      res.status(201).json(song)
      console.logs(song)
   }
   catch(err){
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

router.put(":/Id", async(req,res) => {
   try{
      const song = req.body
      await song.updateOne({_id: req.params.id},song)
      console.log(song)
      res.sendStatus(204)
   }
   catch(err){
      res.status(400).send(err)
   }

   
})

app.use("/api", router)
app.listen(3000)




