const emp1 = {
    name_ : "Volkan",
    age :26,
    showInfos : function (){
        console.log("Bilgiler Gosteriliyor...");
    }
};
const emp2 = {
    name_ : "Ahmet",
    age :22
};

emp1.salary = 5000;
emp1.showInfos();

console.log(emp1);

// yukaridaki yapilar Object Literal (basit obje) olarak gecer.
//   projelerde bu objelerden bircok kez olusturmak istedigimiz icin bu yol mantikli degil.
// constructor yapisi da burdan cikmis. Buyuk harfle baslamasi ONEMLI!!!

function Employee(name,age,salary) { // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }


    //console.log(this); // dersek constructor'i komple yazar. buradaki this: constructor
}

// simdi obje uretelim
const employee1 = new Employee("Mustafa",25,5000);
const employee2 = new Employee("Ahmet",25,5000);

console.log(employee1);
