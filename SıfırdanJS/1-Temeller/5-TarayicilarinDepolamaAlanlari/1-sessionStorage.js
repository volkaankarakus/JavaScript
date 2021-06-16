// uygulamalarda herhangi bir veritabani kullanmiyorsak tarayicilarin
//   kendi iclerinde bulunan session ya da local storagelari kullanabiliriz.

// f12 -> application -> burada local storage ve session storage var

// ikisinin de calisma mantigi ayni ama :
// localStorage : degerleri depoladigimizda degerleri silmedigimiz surece burada sabit kaliyor, 
//                  browser'i kapatsak bile burada sabit kalir.

// sessionStorage : session, oturum demek. Oturum acik kaldigi surece sessionStorage'da veriler kalir.
//                       Sekmeyi ya da browser'i kapatirsak veriler silinir.


// SESSION STORAGE - Key ve Value
// ilk basta butonlari secelim
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// inputlari secelim
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

// eventlerimi yakalamak istiyorum
add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value); //addkey inputumdan gelen degeri addkey.value seklinde alabilirim. aynisi value icin de gecerli
                                                             // anahtar ve degere, degerler girilince bunu sessionStorage'da gorebiliyoruz
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value) // parametre olarak sadece bir tane key alir. sessionStorage'a kayitli key girilince 
                                                              // hem key'i hem de value'yu siler.
}

function clearItem(e){
    sessionStorage.clear(); // tum verileri siler.
}