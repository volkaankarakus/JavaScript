// inputumuzu ele alalim id'si todo olan
const todoInput = document.getElementById("todo");
let element;

element = todoInput;
// icindeki classlara bakalim
element = todoInput.classList;
element = todoInput.classList.length; // cevap 1 geldi o da form-control'umuz.
// buna bir class daha ekleyelim
element = todoInput.classList.add("newClass"); 
element=todoInput; // artik class = "form-control newClass" oldu.

//yeni bir class ekleyip-cikarmayi gorelim
todoInput.classList.add("newClass2");
todoInput.classList.remove("newClass2");

//placeholder'a bakalim
element = todoInput.placeholder; // Bir Todo Girin
// ya da 
element = todoInput.getAttribute("placeholder");


// placeholder'i yeni bir seye set edebiliriz
element = todoInput.setAttribute("placeholder","naber");


//bir elementte herhangi bir ozelligin olup olmadigini kontrol edebiliriz, false ya da true doner
element = todoInput.hasAttribute("name"); // name attribute'u oldugu icin true doner.

//elementin herhangi bir attribute'unu kaldirmak istersek : removeAttribute
element = todoInput.removeAttribute("name");

console.log(element);