console.log('%c HI', 'color: rgb(0,255,0')

function fetchDoggos() {
fetch('https://dog.ceo/api/breeds/image/random/4')
    .then (response => response.json())
    .then (json => renderDoggos(json))

}

function renderDoggos(json) {
 
    let dogImage = document.getElementById('dog-image-container');
    json.message.forEach(dog => {
       
        let dogImg = document.createElement('img')
        dogImg.src = dog;
        dogImage.append(dogImg);
    })


}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then (response => response.json())
    .then (json => renderBreeds(json))
}

function renderBreeds(json) {
  
    let breedContainer = document.getElementById('dog-breeds')
    let breedList = json.message
    let breeds = Object.keys(breedList)
    

   
    breeds.forEach(breed => {
        let li = document.createElement('li')
        li.innerHTML = `<li> ${breed}</li>`
        
        breedContainer.append(li)
    })
}


function colorChanger() {
    let breeds = document.getElementById('dog-breeds')
    
    breeds.addEventListener('click',function(event){
    event.target.style.color = ('rgb(0 , 0, 255');
        
    })
}

document.addEventListener('DOMContentLoaded', function(){
    fetchDoggos();
    fetchBreeds();
    colorChanger();
  
})
