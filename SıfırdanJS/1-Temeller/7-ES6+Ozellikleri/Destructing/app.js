// arraylerin ve objelerin icinden deger almak icin kullandigimiz kisayol
// DESTRUCTING


arr = [100,200,300,400];

// 0. index number1, 1. index number2 olsun 
const [number1,number2] = arr;

console.log(number1,number2); // 100 200

////////////////////////////////////////////////////////
// Obje Destructing 
const numbers = {
    a :10,
    b :20,
    c :39
};

const {a:Number1,c:Number2} = numbers;
console.log(Number1,Number2);

////////////////////////////////////////////////////////
// Function Destructing 
const getLangs = () =>["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);

////////////////////////////////////////////////////////
// Obje

const person = {
    name : "Volkan Karakus",
    year : 1995,
    salary : 5000,
    showInfos : () => console.log("Bilgiler Gosteriliyor.")
}

const {name : isim, year : yil, salary : maas, showInfos : bilgileriGoster} = person ;

 console.log(isim,yil,maas);
 bilgileriGoster();
