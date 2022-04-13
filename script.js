"use strict";

fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(albums => {
        const list = document.querySelector('#albums')
        albums.forEach(element => {

            const title = document.createElement("li");
            title.classList.add("album_title")
            title.innerText = element.title

            const button = document.createElement("button");
            button.classList.add("btn")
            button.innerText = "Delete"

            title.append(button)
            list.append(title)

            title.addEventListener("click", (event) => {
                const isRemoveButton = event.target.className === "btn";

                if(isRemoveButton){
                    const item = event.target.closest(".album_title");
                    //   console.log(item);
                    item.remove();
                }
            });

        });  console.log(albums)
    } ) .catch((error) => console.error("Error"))


  

