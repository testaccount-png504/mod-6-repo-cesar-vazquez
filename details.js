addEventListener("DOMcontentLoaded", async function () {
    const urlparam = new URLSearchParams(window.location.search)
    const songid = urlparam.get('id')
    console.log('songid')

    const response = await fetch("http://localhost:3000/api/songs/" + songid)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += $(song.title)
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h2>title - ${songs.title}</h2>
        <h3>artist - ${songs.title}</h3>
        <p>title - ${songs.title}</p>
        <p>title - ${songs.title}</p>
    `


    document.querySelector("div").innerHTML = html



})