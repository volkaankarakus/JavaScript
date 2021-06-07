// Window Object
let value;

console.log(this); // bunu dedigimizde en genel obje olan Window objesini gorebiliyoruz.

console.log(this.document) // burada butun HTML kodlarimizi gorebiliyoruz

value=document;
console.log(value); // ya da boyle.

value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;
value=document.URL;


// SCRIPTLER
value=document.scripts;
value=document.scripts.length;
value=document.scripts[0];


// LINKLER 
value=document.links;
value=document.links[0];
value=document.links[document.links.length-1]; // son link icin
//son linkin class adini cekelim
value=document.links[document.links.length-1].getAttribute("class");
//ya da 
value=document.links[document.links.length-1].className;
//classlari liste olarak gormek istersem (clear-todo,btn,btn-dark gibi)
value=document.links[document.links.length-1].classList;

// id'sine bakalim
value=document.links[document.links.length-1].getAttribute("id");


// FORMLAR
value=document.forms;
value=document.forms.length;
value=document.forms[0];
value=document.forms[0].id; // ya da value=document.forms[0].getAttribute("id");
value=document.forms[0].name; // ya da value=document.forms[0].getAttribute("name");




console.log(value);

