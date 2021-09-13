console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    fetchImage() 
    fetchBreeds()
 })
 // fetchImage()
 
 function fetchImage(){
     // debugger
     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
     fetch(imgUrl)
     .then(resp => resp.json())
     .then(dogs => showImage(dogs["message"]))
 }
 
 function showImage(dogs){
     const divImage = document.getElementById("dog-image-container")
     dogs.forEach((image) => {
         const img = document.createElement('img');
         img.src = image; 
         divImage.appendChild(img)
         // divImage.innerHTML += `<img src=${image} />`
     })
 }
 
 function fetchBreeds(){
     // debugger
     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
     fetch(breedUrl)
     .then(resp => resp.json())
     .then(dogs => addBreed(dogs["message"]))
 }
 
 function addBreed(dogs){
     // console.log(dogs)
     for (dog in dogs){
         // console.log(dog)
         displayABreed(dog)
     }
 
     const select = document.getElementById("breed-dropdown");
     select.addEventListener("change", (event) => {
         const ul = document.getElementById("dog-breeds");
         ul.innerText = "";
         const letter = event.target.value;
 
         for(dog in dogs){
             if(dog.charAt(0) === letter){
                 displayABreed(dog)
             }
         }
 
     })
 
     function displayABreed(dog){
         const ul = document.getElementById("dog-breeds");
         const li = document.createElement("li");
         li.innerText = dog;
         const subUl = document.createElement("ul")
         // debugger
         ul.appendChild(li);
         li.addEventListener('click', (e) => e.target.style.color = "aqua")
         // debugger
         for (type of dogs[dog]){
             const subLi = document.createElement('li');
             subLi.innerText = type;
             
             li.appendChild(subUl);
             subUl.appendChild(subLi);
             
         }
 }
 
 
 
 }