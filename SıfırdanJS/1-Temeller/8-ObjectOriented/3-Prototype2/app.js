function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("İsim :"+ this.name + "Yas :" + this.age);
    }
}

const emp1 = new Employee("Volkan",25);
const emp2 = new Employee("Ali",30);

console.log(emp1);

// olusturulan herbir object icin showInfos() tekrar bastan olusturulur
//   bunu prototype'e yazarsak tek adreste 1 kere olusturulmus olur.
Employee.prototype.showInfos2 = function () {
    console.log("İsim :"+ this.name + "Yas :" + this.age);
}
// artik tek bir adreste. console.log() yapinca __proto__ icinde.




