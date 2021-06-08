// Replace 
const cardbody = document.querySelectorAll(".card-body")[1]; // nodeList olarak donucek,bunun 1. indexini alalim

//h5'teki Todolar basligi yerine bir h3 ekleyelim, bunun icin once yeni bir h3 tanimlayalim
// <h5 class="card-title" id = "tasks-title">Todolar</h5>
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id="tasks-title";
newElement.textContent = "Yeni Todolar" // tek bir elementin icinde tek bir yazi oldugu icin textContent kullanmakta sakinca yok

//Eski Elementi secelim
const oldElement = document.querySelector("#tasks-title"); //h5'in id'si tasks-title

cardbody.replaceChild(newElement, oldElement);

console.log(cardbody); 
