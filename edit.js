addEventListener("DOMContentLoaded", async function(){
    document.querySelector("updatebtn").addEventListener("click", updatesong)
    const urlparam = new URLSearchParams(window.location.search)
    const songid = urlparam.get('id')
    const response = await fetch("http://localhost:3000/api/songs" + songid)
    if(response.ok){
        let song = await response.json
        document.querySelector("#songid").value = song._id
        document.querySelector("#title").value = song.title
        document.querySelector("#artist").value = song.artist
        document.querySelector("#released").value = song.releasedDate.substring(0,10)
        document.querySelector("#popularity").value = song.popularity
        document.querySelector("#genre").value = song.genre
    }
    
})

async function updatesong(){
    const songid = document.querySelector("#songid").value
    const song = {
        _id: document.querySelector("#songid").value,
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releasedDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ?
           document.querySelector("#genre").value.split(",") : []
    }
    const response = await fetch("http://localhost:3000/api/songs/" + songid,{
        method: "PUT",
        headers: {
            "content type" : "application.json" 
        },
        body: json.stringify(song)


    })
    if(response.ok){
        alert("update song")
    }
    else{
        document.querySelector("#error").innerHTML = "cannot update song"
    }


}