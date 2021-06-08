// Dinamik Element Silme

//todo'larin bulundugu ul etiketimizi secelim
const todoList = document.querySelector("ul.list-group"); // ul'lerden class'i list-group olanlari secelim
const todos = document.querySelectorAll("li.list-group-item"); // tum li etiketlerimizi buradaki array'e atamak istiyorum
// todos artik li'lerimizi tasiyan NodeList


// Remove Methodu
//   todo1'i silmek istersek
todos[0].remove();

// child vererek de silebiliriz
//   son element olan todo4'u silelim
todoList.removeChild(todoList.lastElementChild); // ya da todoList.removeChild(todos[3]);



console.log(todos);
console.log(todoList);

