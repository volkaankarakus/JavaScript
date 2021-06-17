// herhangi bir input girmeden todo ekleye bastigimizda bos bir todo ekliyor
//  bos todo eklemesini engelleyip, bilgilendirme mesaji verelim
//       adTodo icindeki if kosulu

// Tum Elementleri Secme 

// todo'ya gelmek icin once form'u secmemiz gerekiyor
const form = document.querySelector("#todo-form"); // id'si todo-form

// daha sonra inputtaki degeri todo olarak eklemeye calisicaz
const todoInput = document.querySelector("#todo");

// ul elementini parent olarak secmemiz gerekiyor cunku bunun icerisine eklicez.
const todoList = document.querySelector(".list-group");

//card'i secip, bunun altina alert eklicez. Ornegin todo eklenince "Basariyla Eklendi" gibi.
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

//bir todo arayin alanini da burda tanimlamis olalim
const filter = document.querySelector("#filter");
//tum tasklari temizleyin alanini da burada tanimlamis olalim
const clearButton = document.querySelector("#clear-todos");

//////////////////////////////////////////////////////////////////////////////////////////
// artik buradaki forma bir submit kazandirmamiz lazim
//       submit olunca list item olarak eklenmeli

eventListeners();

function eventListeners(){  // Tum event listenerlar
    form.addEventListener("submit",addTodo);

}

function addTodo(e){
    const newTodo = todoInput.value.trim(); // w3schoolstan bakildi. trim() metnin basindaki ve sonundaki bosluklari yok eder.
    //newTodo'yu artik aldik, Bunu arayuze ekleyelim.

    if(newTodo ==="") { //bossa alert ver 
        // bootstrap'e alert message yazip danger kodu asagidaki gibi
        /*
        <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>
        */

        showAlert("danger","Lutfen bir todo giriniz"); //showAlert icine type ve message alsin. type rengine gore success,danger gibi.. 
    }
    else{ // bos degilse ekleme yap
        addTodoToUI(newTodo);
        showAlert("success","Basariyla eklendi.");
    }
    
    e.preventDefault();
}

function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    // simdi text ekleyebiliriz
    alert.textContent = message;
    // bunu ekrana atalim
    firstCardBody.appendChild(alert);
    // alert ekranda belli bir saniye sonra kaybolsun, bunun icin windowun methodu olan setTimeout kullanicaz

    //setTimeout
    setTimeout(function(){ // iki parametre alir; ilki fonksiyon,ikincisi kac milisaniye sonra calisacagi
        alert.remove();
    },1000);

}

function addTodoToUI(newTodo){ // string degerini list item olarak UI'a ekler

    // HTML^de elimizle girmis olsaydik su sekildeydi 
    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
    */

    //biz bunu element olarak olusturucaz
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));

    listItem.appendChild(link);

    // bu islemlerin ust parenti class'i "list-group" olan ul'ydi. Bunu da todoList olarak en basta tanimlamistik.
    // list-item'i ul'ye ekleyelim
    todoList.appendChild(listItem);

    // suanda sorunsuz sekilde calisiyor, input girdikten sonra input alanini bosaltalim
    todoInput.value = "";
}

