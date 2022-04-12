"use strict";

//1:
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(albums => {
            const list = document.querySelector('#albums')
            albums.forEach(element => {

                const title = document.createElement("li");
                title.classList.add("album_title")
                title.innerText = element.title
                list.append(title)
            //    console.log(element.title)
           });
            console.log(albums)
        } )
        .catch((error) => console.error("Error"))


  

