addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addbtn").addEventListener("click", addsong)
})


async function addsong(){
    const song = {
        title: document.querySelector(#title).value,
        artist: document.querySelector(#artist).value,
        releaseDate: document.querySelector(#release).value,
        popularity: document.querySelector(#popularity).value,
        genre: document.querySelector(#genre).value ? document.querySelector(#genre).value.split(',') : []
    }
    const response = await fetch("http://localhost:3000/api/songs"),{
        method: "POST",
        headers:{
            "content-type" : "application/json"
        },
            body: JSON.stringify(song)
    })

    if(response.ok){
        const result = await response.json()
        alert("add song with an id of" + results._id)
        
        document.querySelector("form").rest()
    }
    else{
        document.querySelector("#error").innerHTML = "cannot add song"
    }
    
}