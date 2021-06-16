const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);// submit oldugunda addTodo calissin

function addTodo(e){
    //inputtan degeri almamiz gerekiyor
    const value = todoInput.value;

    // aldigimiz degeri bir array olarak yazmak istiyoruz ama localStorage'da bu array varsa 
    //    onu ilk basta elde edip daha sonra bu degeri ona eklememiz ve yazmamiz gerekiyor 
    //      ama o "todos" key'imiz yoksa bunu olusturmamiz gerekiyor.

    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);

    // array'i tekrar yazmamiz gerekiyor
    localStorage.setItem("todos", JSON.stringify(todos));


    //submitte kendi sayfamiza gitmeyi engellemek icin 
    e.preventDefault();
}