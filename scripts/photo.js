document.addEventListener("DOMContentLoaded",()=>{

    const photoList = document.getElementById("photoList");
    const photo = document.getElementById("photo");

    for(let i = 0; i< hikes.length;i++){
        photoList.innerHTML += `<option value="${ hikes[i].id }">${ hikes[i].name }</option>`;
    
    }
    photoList.addEventListener("change",(e)=>{
        // photo.src = "./data/HikingPage/hiking.js/" + e.target.value;
        

        for(let i = 0; i< hikes.length;i++){
            // photo.src = "./data/HikingPage/hiking.js/" + e.target.value;
         if(e.target.value == hikes[i].id){
            photo.src = "./data/HikingPage/" + hikes[i].scenicImage;
            photo2.src = "./data/HikingPage/" + hikes[i].trailMapImage;
            const descriptionPath = hikes[i].description;
            const descriptionElement = document.getElementById("description");
            descriptionElement.innerHTML = descriptionPath;

         }
        }
    });

})