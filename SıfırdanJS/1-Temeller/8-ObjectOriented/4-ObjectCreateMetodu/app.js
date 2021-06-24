// kendimiz bir nesne olusturalim
const obje = {
    test1 : function(){
        console.log("Test 1");
    },
    test2 : function(){
        console.log("Test 2");
    }
}
console.log(obje);// 1 tane obje olusturduk ve icinde 2 tane method var.

// yeni bir obje olusturup objemin proto ozelligi yukaridaki ozellikleri gostersin.
//    yani yukaridaki ozellikleri kapsasin.

const emp = Object.create(obje); // bu birazdan kalitim islemlerinde kullanilacak

console.log(emp); // herhangi bir ozelligi yok. proto icinde test1 ve test2'si var.

emp.name ="Volkan";
emp.age = 26; // ozellik ekledik.

//////////////////////////////////////////////////////////////////////////////////
function Person(){
    Person.prototype.test3 = function(){
        console.log("Test 3");
    }
    Person.prototype.test4 = function(){
        console.log("Test 4");
    }
}

const person = new Person();
console.log(person); // person yapisinin prototype'inin icerisinde test3 ve test4 var.

/////////////////////////////////////////////////////////////////
// bir Employee constructor'i olusturalim ve bu test1 ve test2'yi miras alsin.
function Employee(name,age){
    this.name = name;
    this.age = age;
}

// Employee icinde name, age ve proto var.
// Bir objenin proto'su ilk once kendisini gosterir. Bunun proto'su da objeyi gosterir.
// biz istiyoruz ki Employee; test3 ve test4'u miras alsin.
//   bunu miras almasi icin:
//     Employee prototype'in gosterdigi yerin object olmamasi lazim.
//     Employee prototype'inin gosterdigi adres: Person'in prototype'i olmali.
//     Employee prototype'inin Object.create() ile olusturmam gerekiyor.

Employee.prototype = Object.create(Person.prototype);

const emp2 = new Employee("Ali",40); // obje olusturduk.

console.log(emp2);
/*
Employee {name: "Ali", age: 40}
    age: 40
    name: "Ali"
    __proto__: Person
        __proto__:
            test3: ƒ ()
            test4: ƒ ()
            constructor: ƒ Person()
            __proto__: Object
*/  

emp2.test4(); // Test 4 ciktisi alabiliyoruz. yani kalitim yapmis olduk.

// sonradan fonksiyon da ekleyebiliriz
Employee.prototype.myTest = function() {
    console.log("myTest");
}
/*
Employee {name: "Ali", age: 40}
    age: 40
    name: "Ali"
    __proto__: Person
        myTest: ƒ ()
        __proto__:
            test3: ƒ ()
            test4: ƒ ()
            constructor: ƒ Person()
            __proto__: Object
*/