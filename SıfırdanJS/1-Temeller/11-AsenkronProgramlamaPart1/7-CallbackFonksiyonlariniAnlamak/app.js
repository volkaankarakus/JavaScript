// Callback Fonksiyonlar
const langs =["JS","Python","C++"];

langs.forEach(function(lang){
    console.log(lang);
});

document.getElementById("btn").addEventListener("click",function(){
    console.log("Tikla");
});

function process1(){
    setTimeout(function(){
        console.log("Process 1");
    },3000);
    
}

function process2(){
    setTimeout(function(){
        console.log("Process 2");
    },2000);
}


process1();
process2();
console.log("Naber3");

/*
Suanda Naber3,Process 2, Process 1 sirasiyla yaziliyor.
Process 1 i 3 ile, 2 yi de 4 ile kopyalayalim ve 3un 4'ten once olmasini saglayalim.
  bunu process4'u process3'e callback olarak gondericez.
*/

function process3(callback){
    setTimeout(function(){
        console.log("Process 3");
        callback();
    },3000);
    
}

function process4(){
    setTimeout(function(){
        console.log("Process 4");
    },2000);
}

process3(process4); // ilk basta process3, daha sonra process4 calisti.

// bunun mantigi ornek olarak : bir tane fonksiyonu biryerden veri geldiginde calistirmak istiyorum, o zaman bu fonksiyonu callback olarak gondericez.



