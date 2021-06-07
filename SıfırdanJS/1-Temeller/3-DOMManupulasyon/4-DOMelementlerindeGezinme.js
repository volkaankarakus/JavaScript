let value;

const todoList = document.querySelector(".list-group");

const todo2 = document.querySelector(".list-group-item:nth-child(2)");

const cardrow = document.querySelector(".card.row");

value=todoList;
value=todo2;
value=cardrow;

// Child Nodes - text ve bosluklari beraber aldigi icin ise yaramaz
value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Elementleri alir
value = todoList.children; // artik todo1,todo2,todo3,todo4 geldi
value = todoList.children[0]; // todo1 

// son todo
value = todoList.children[todoList.children.length-1];
value = todoList.children[todoList.children.length-1].textContent = "todo-4 son elemandir";


console.log(value);