// Arka planda isler yine ayni ama yazimlar ES6'da daha kisa ve net

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function (){
    console.log("İsim :" + this.name + " Yas :" +this.age + " Maas :" + this.salary);
}

const emp = new Employee("Volkan",26,5000);

console.log(emp);

// ES6 ile yeni yontemle yazalim.
// Constructor olarak yazdigimiz Employee'yi class olarak yazalim 
//  daha sonra constructor diye birsey tanimlayip bunun icine yaziyoruz
//  ES6 ile basina function yazmamiza gerek yok
// showInfos()'un yazildigi yer otomatik olarak prototype'e ekler.

class Employee2 {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim :" + this.name + " Yas :" +this.age + " Maas :" + this.salary);
    }
}

// simdi obje olusturabiliriz
const emp2 = new Employee2("Ali",40,10000);
console.log(emp2);

emp2.showInfos();