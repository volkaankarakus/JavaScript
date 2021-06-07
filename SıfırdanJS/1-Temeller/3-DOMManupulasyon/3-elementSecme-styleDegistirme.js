const element = document.querySelector("#clear-todos");


// Element Ozellikleri
// console.log(element);
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent); // elementin icindeki yazilari ceker.
// console.log(element.href); // elementin nereye gittigine bakar.

console.log(element.style); // style

// STYLE VE ELEMENT OZELLIKLERINI DEGISTIRME 
element.className="btn btn-primary";
element.style.color="#000"; // "red" gibi de verilebilir.
element.style.marginLeft="300px";

// baska bir sayfaya yonlenmesi icin hem href hem de target verilmeli
element.href="https://www.google.com.tr";
element.target="_blank";

// Tum Tasklari Temizleyin yerine baska bir yazi yazalim
element.textContent="Tasklari Temizle";

// HTML kodu eklemek icin 
element.innerHTML=" <span style='color:white'>Task Sil </span>";

// butun li'leri secelim.
const elementLi=document.querySelectorAll(".list-group-item");
elementLi.forEach(function(el){
    el.style.color="red";
});

console.log(elementLi);

// todo-1 ve todo-3 u secmek istersem

let elementTek = document.querySelectorAll("li:nth-child(odd)"); // childlar 1'den baslar, 0 degil !!
let elementCift = document.querySelectorAll("li:nth-child(even)");

elementTek.forEach(function(el) {
    el.style.background="#ccc";
    el.style.color="white";
});

console.log(elementTek);