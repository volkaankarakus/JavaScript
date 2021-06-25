// ES6 - Kalitim

// ES6'DAN ONCE YAPTIGIMIZ KALITIM :
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("isim " + this.name +" Yas :" +this.age);
}

const person = new Person("Mustafa",25);
console.log(person);

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

// Employee, Person'dan miras alsin
// Employee'nin prototype'i, person prototype'i yaparak bunu saglariz
Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Volkan",26,5000);

console.log(emp);
emp.showInfos(); // isim Volkan Yas :26

// salary'i showInfos()'da yazdirmadi. Employee'ye yeni showInfos yazalim
// Buna OVERRIDING- IPTAL ETME denir.

Employee.prototype.showInfos = function(){
    console.log("İsim : " +this.name + " Yas : " + this.age + " Maas : " + this.salary);
}
emp.showInfos(); // İsim : Volkan Yas : 26 Maas : 5000

//////////////////////////////////////////////////////////////////////////////
// Personda da Employee'de de name ve age var. Bunlari tek sefer yazip 
//    call() cagirabilirim.Fazladan yazmaya gerek yok

function Person2 (name,age) {
    this.name = name;
    this.age = age;
}

function Employee2 (name,age,salary){
    Person2.call(this,name,age); // ilk parametre obje, o da burada this yani Employee
    this.salary = salary;
}
/////////////////////////////////////////////////////////////////////////////////
// ES6 ile

class Person3 { // SuperClass ya da BaseClass olarak gecer.
    constructor(name,age){
        this.name = name ;
        this.age = age;
    }

    showInfos3(){
        console.log("İsim : " +this.name + " Yas : " + this.age);
    }
}

class Employee3 extends Person3 { // extends diyerek Person3'ten kalitim alir
                                    // DerivedClass, SubClass, ChildClass olarak gecer.
    constructor(name,age,salary) {
        super(name,age); // super, BaseClass olan Person3'e karsilik geliyor.
        this.salary = salary;
    }

    // miras aldigimiz showInfos3'u override edelim 
    showInfos3(){
        console.log("İsim : " +this.name + " Yas : " + this.age + " Maas :" + this.salary);
    }
    
    //yeni methodlar ekleyelim
    toString3(){
        console.log("Employee");
    }
    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp3 = new Employee3("Ayse",40,10000);
console.log(emp3);
emp3.showInfos3(); // İsim : Ayse Yas : 40 Maas :10000
emp3.toString3();

