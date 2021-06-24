// Inheritance - Kalitim
//    Bir objenin baska bir objeden methodlarini miras almasidir.

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