let value;

const todoList = document.querySelector(".list-group");

const todo2 = document.querySelector(".list-group-item:nth-child(2)");

const cardrow = document.querySelector(".card.row");

value=todoList;
value=todo2;


// Child Nodes - text ve bosluklari beraber aldigi icin ise yaramaz
value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Elementleri alir
value = todoList.children; // artik todo1,todo2,todo3,todo4 geldi
value = todoList.children[0]; // todo1 

// son todo
value = todoList.children[todoList.children.length-1];
value = todoList.children[todoList.children.length-1].textContent = "todo-4 son elemandir";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children;
value = cardrow.children[2].children[1].textContent="Burasi da degisti..";

value = todoList;
value = todoList.children[0]; // yerine todoList.firstElementChild;
value = todoList.lastElementChild;

// todo list'in kac tane children'i var ?
value = todoList.childElementCount;//ya da todoList.children.length;

// PARENT ELEMENT
// simdi tersine gidelim. bir elementin parent'ini(ust div'ini) bulalim
value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

// element kardeslerine bakalim.
value = todo2;
value = todo2.previousElementSibling; // todo1'e gittik.
value = todo2.nextElementSibling; //todo3'e gittik.

console.log(value);
