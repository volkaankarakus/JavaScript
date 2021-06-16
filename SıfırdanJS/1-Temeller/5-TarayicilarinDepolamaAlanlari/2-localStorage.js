// Local Storage


// Local storage'a deger atayabiliriz
localStorage.setItem("hareket","burpee"); // icine key-value parametreleri ister.
localStorage.setItem("tekrar",50); // int bile girsek bunu string olarak tutar.

//string tutup tutmadigini get ile cagirarak bakalim
// Get Item 
const value = localStorage.getItem("tekrar"); // cevap 50
console.log(value);
console.log(typeof value);

// Clear Local Storage
localStorage.clear();

if(localStorage.getItem("sport") === null){
    console.log("Sport verisi bulunmuyor.");

}
else {
    console.log("Sport verisi bulunuyor.");
}

// local storage'a array yazmaya calisalim
//   localStorage sadece string kabul ettigi icin biraz ugrastirici.
const todos = ["Todo1","Todo2","Todo3"];
localStorage.setItem("todos",todos); // key'i de todos olsun.
// boyle yazarsak Todo1","Todo2","Todo3" olarak string gorur.

const todos2 =["Todo1","Todo2","Todo3"];
localStorage.setItem("todos2key", JSON.stringify(todos2)); // artik arraymis gibi yazilir. type'i da string degil arraydir.
// valuelarini cekmeye calisalim
const value2 = localStorage.getItem("todos2key");
console.log(value2); // suanda yine string 
//icindeki string degeri array haline cevirmek istiyoruz
const value3 = JSON.parse(localStorage.getItem("todos2key"));
console.log(value3); // artik array icinde.




