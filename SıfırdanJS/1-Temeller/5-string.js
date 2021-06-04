let value;

const firstName="Louis";
const lastName="Armstrong";

const langs="Java,Python,C++";

value=firstName + lastName;
value=firstName + " " + lastName ;

value=firstName.length;

value=firstName.concat(" ",lastName," ","Caz");

value=value.toLowerCase();
value=value.toUpperCase();

// Char At
value=firstName.charAt(0);
value=firstName.charAt(firstName.length-1);

//Split
value=langs.split(",");

//Replace
value=langs.replace("Python","CSS"); // python yerine css'i koyduk.


// Includes
value=langs.includes("Java"); // stringin icinde java varsa true doner, yoksa false doner
value=langs.includes("asdadsdfsdfsdf");


// Index Of
value=firstName.indexOf("k");

console.log(value);
