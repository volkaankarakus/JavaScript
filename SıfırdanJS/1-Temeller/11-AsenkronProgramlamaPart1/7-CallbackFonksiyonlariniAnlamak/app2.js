/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const languages = ["JS","Java","C","C++"];

function addLangs(lang){
    setTimeout(function(){
        languages.push(lang);
        console.log("Eklendi");
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        languages.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLangs("Python");
getAllLangs();
// addLangs 2 saniye sonra baslicak. getAllLangs 1 saniye sonra baslayacak. yani asenkron bir durum sozkonusu.

/*
JS
Java
C
C++ 
Eklendi       ciktisi aldik. Bunun yerine once eklensin daha sonra yazdirsin istiyoruz. o zaman callback kullanicaz 
*/


const languages2 = ["JS","Java","C","C++"];

function addLangs2(lang,callback){
    setTimeout(function(){
        languages2.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs2(){
    setTimeout(function(){
        languages2.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLangs2("Python",getAllLangs2);
/* 
Eklendi
JS
Java
C
C++
Python       haline geldi.
*/