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

    document.addEventListener("DOMContentLoaded",loadAllTodosToUI); // 4

    secondCardBody.addEventListener("click",deleteTodo); // 5

    filter.addEventListener("keyup",filterTodos); // 7
}

///////////////// 7 //////////////////////////
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase(); // hepsini kucuk harfe cevirsin
    const listItems = document.querySelectorAll(".list-group-item"); // sayfadaki tum li'leri cekmemiz gerekiyor. class'i list-group-itemler demek yeterli.
    // li'ler icinde tek tek gezinmemiz gerekiyor
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){ // text icinde filterValue'yu bulamazsa -1 doner
            // bulamadiginda listItem'in display ozelligini none yapicaz. boylece sayfada yer alicak ama gorunmeyecek
            listItem.setAttribute("style","display : none !important"); // css ozelligi oldugu icin Attribute seklinde ekledik.
                                                                 // class icinde d-flex oldugu icin bu none'a baskin gelmesin diye important yaptik.
        }
        else{
            listItem.setAttribute("style","display : block");
        }
    });
}
//////////////////////////////////////////////


/////////////////// 5 ////////////////////////// 
function deleteTodo(e){
    // cardbody icinde nereye basildigini e objesi sayesinde anlayabiliyorduk
    // basilan yer x butonu ise silinme gerceklesecek
    if(e.target.className === "fa fa-remove"){
        //butun li'yi silicegimiz icin ust elementlere yani li'ye gelene kadar parentlara gitmemiz gerekiyor
        e.target.parentElement.parentElement.remove();
        ///// 6 /////////
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        //////////////////

        showAlert("success","Todo basariyla silindi.");
    }
}
///////////////////////////////////////////////

/////////////////////// 6 ///////////////////////
function deleteTodoFromStorage(todo){
    // silinecek oge aslinda li elementi icindeki textContent.
    //     onun icin deleteTodoFromStorage icine bir todo gondermem gerekiyor. Bunu da 
    //             deleteTodo icerisinde arayuzden kaldirdiktan sonra yapabiliriz.

    // ilk basta localstorage'daki todolarimizi almaya calisicaz
    let todos = getTodosFromStorage();
    todos.forEach(function(eachtodo,index){
        if(todo === eachtodo){
            todos.splice(index,1); // splice, o indexten itibaren 1 obje sil.Bu sekilde array'den deger silebiliriz.
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos)); // kalan todoslari localstorage'a yazmam(set etmem) gerekiyor.
}


/////////////////////////////////////////////////

////////////// 4-sayfa yuklendiginde storage'dan ekrana yukleme //////////////
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);

    })
}
/////////////////////////////////////////////////////////////////////////////
function addTodo(e){
    const newTodo = todoInput.value.trim(); // w3schoolstan bakildi. trim() metnin basindaki ve sonundaki bosluklari yok eder.
    //newTodo'yu artik aldik, Bunu arayuze ekleyelim.

    if(newTodo ==="") { //bossa alert ver 
        // bootstrap'e alert message yazip danger kodu asagidaki gibi
        /*
        <div class="alert alert-danger" role="alert">
            This is a danger alert???check it out!
        </div>
        */

        showAlert("danger","Lutfen bir todo giriniz"); //showAlert icine type ve message alsin. type rengine gore success,danger gibi.. 
    }
    else{ // bos degilse ekleme yap
        addTodoToUI(newTodo);

        addTodoToStorage(newTodo);

        showAlert("success","Basariyla eklendi.");
    }
    
    e.preventDefault();
}

///////// 3-STORAGE'A EKLEME /////////
function getTodosFromStorage(){ //Storage'dan todolari alma
    let todos;

    if(localStorage.getItem("todos")=== null){ //eleman yoksa todos array'imizi bos bir sekilde baslatiyoruz.
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos")); // stringi array'a cevirme
    }
    
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));

}
/////////////////////////////////////////

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

