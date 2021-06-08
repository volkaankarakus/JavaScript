// Yeni Element Olusturma 
const newLink = document.createElement("a");

//olusturdugumuz bu elementi card-body'nin icine ekleyelim
const cardbody = document.getElementsByClassName("card-body")[1]; //card-body'den 2. elemani yani 1. indexi alalim

//newLink'i buraya eklemeden once id verelim
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank"; //yeni bir sekmede acilsin.
newLink.appendChild(document.createTextNode("Farkli Sayfaya Git"));
//element artik tamam artık cardbody'ye ekleyebiliriz.
cardbody.appendChild(newLink);



// text content
// newLink.textContent = "Farkli Sayfaya Git"; 
console.log(cardbody); // cardbody icinde cok fazla child var, hr-h5-div-ul gibi 
                       //     cardbody.textContent="asdasdasdasd" dersek bu childlarin hepsi silinir,onun yerine buraya yazdigimiz yazi gecer.
                       //          cardbody'ye bir text eklemek istersem bunu textContent ile degil textNode ile eklemem gerekiyor.
                       
const text = document.createTextNode("Naber");
//bu textNode'u cardbody'nin en sonuna yerlestirelim
cardbody.appendChild(text);



console.log(cardbody);
console.log(newLink);


