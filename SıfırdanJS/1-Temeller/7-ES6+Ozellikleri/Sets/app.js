// Sets - Kumeler
// bir degeri bir kere tasir

const mySet = new Set();
mySet.add(100);
mySet.add(100); // hata vermez ama eklemez
mySet.add(3.14);
mySet.add(true);
mySet.add("Volkan");
mySet.add([1,2,3,4,5]);
mySet.add({a:1,b:2});

mySet.delete("Volkan");

const mySet2 = new Set([100,3.14,"Ali"]);


console.log(mySet); 
console.log(mySet.size);// 5

console.log(mySet2);

// HAS METODU (kumede eleman var mi onu kontrol eder)
console.log(mySet2.has(3.14)); // true
console.log(mySet.has(2000)); // false
console.log(mySet.has([1,2,3,4,5])); // false. Cunku arrayler referans tipli. yani adresleri farkli.

///////////////////////////////////////////////////////////////
// setlerden array olusturma 
const array = Array.from(mySet);
console.log(array);
