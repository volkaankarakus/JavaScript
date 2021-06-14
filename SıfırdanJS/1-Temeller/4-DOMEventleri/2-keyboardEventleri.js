// Klavye Eventleri

// keypress
document.addEventListener("keypress",run); // harf ya da sayiya basildiginda calisir.

function rune(e){
    console.log(e.which); // hangi tusa basildiysa o tusun ASCII halini doner
    console.log(e.key); // basilan tusu doner
    console.log("Naber");
}


// keydown
document.addEventListener("keydown",run); // harf ya da sayiya basilmak zorunda degil,klavyede neye basilirsa basilsin tetiklenir.

function rune(e){
    console.log(e.which); // hangi tusa basildiysa o tusun ASCII halini doner
    console.log(e.key); // basilan tusu doner
    console.log("Naber");
}

// key up
document.addEventListener("keyup",run); // bir tane tusu biraktigimiz zaman tetiklenir.

function rune(e){
    console.log(e.which); // hangi tusa basildiysa o tusun ASCII halini doner
    console.log(e.key); // basilan tusu doner
    console.log("Naber");
}

/////////////////////////////////////
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    // console.log(e.target); // event'in nerede olustugunu gormus olduk
    // console.log(e.target.value); // degerleri target.value ile gorebiliyoruz
    header.textContent = e.target.value; // input alanina girilen degerleri header olarak dinamik hale getirdik.
}