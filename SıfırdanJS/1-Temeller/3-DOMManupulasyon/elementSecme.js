// Element ID'ye Gore Secme 
let element;

element=document.getElementById("todo-form"); // web sayfamizda todo-form id'sine sahip element varsa bunu cagirir.
element=document.getElementById("tasks-title");

// Element Class'a Gore Secme 
element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("list-group-item")[0];
element=document.getElementsByClassName("card-header");

// Element Tag'e Gore Secme 
element=document.getElementsByTagName("li");
element=document.getElementsByTagName("div");

// yukarida yaptigimiz islemleri cok daha kisa sekilde yapabiliyoruz :  QUERY SELECTOR 
//  Query Selector : Sayfadaki tek bir elementi secer, class'a gore bir element secersek ilk buldugu elementi secer.
//     birden fazla "li" icin ilk "li"'yi dondurur. YANI TEK BIR ELEMENT DONDURUR.
// id'ler icin kullanimi faydali cunku sayfada elementlerin kendine ozgu tek bir id'si var.

// id'ler icin #
element=document.querySelector("#todo-form"); //id'si todo-form olani dondurur.
element=document.querySelector("#tasks-title");


//class'lar icin .
element=document.querySelector(".list-group-item");


// "li"leri querySelector ile cekelim
element=document.querySelector("li");
element=document.querySelector("div");

///////////////////////////// QUERY SELECTOR ALL /////////////////////////////
//  querySelector'da tek bir element donuyordu, ayni class ismine ait elementin sadece ilk elemanini gorebiliyorduk.
//    hepsini gorebilmek icin querySelectorAll kullaniyoruz.
// querySelectorAll, NodeList doner. NodeList array gibi bisey. bunu forEach ile gezebiliyoruz.

element=document.querySelectorAll(".list-group-item");
element.forEach(function(el){
    console.log(el);
});




console.log(element);
