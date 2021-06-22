let value;

const programmer = {
    name:"Volkan Karakus",
    age:26,
    email:"volkankarakus48@gmail.com",
    langs: ["JS","Java","Python"],

    address: {
        city:"Ankara",
        street:"Bahcelievler"
    },

    work:function(){
        console.log("Program Calisiyor..");
    }
}

value=programmer;

value=programmer.email; // ya da 
value=programmer["email"];

value=programmer.address.city;

value=programmer.work();

/////////////////////////////////////////////////////////////////////////////////////////////////
const programmers = [
    {name:"Volkan Karakus",age:25},
    {name:"Ali",age:30}
];

value=programmers[0];
console.log(value);




console.log(value);