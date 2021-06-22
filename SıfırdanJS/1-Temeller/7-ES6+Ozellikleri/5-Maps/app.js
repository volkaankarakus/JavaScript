// Mapler  - Pythondaki dictionary mantigi
// key - value

let myMap = new Map(); // Olusturma 
console.log(typeof myMap); // object

const key1 = "Volkan";
const key2 = {a:10,b:20};
const key3 = () => 2;

// SET
myMap.set(key1,"String Deger"); // ilk parametre vericegimiz key,ikinci parametre karsilik gelen deger
myMap.set(key2,"Object Literal Deger");
myMap.set(key3,"Function Deger");

// GET
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));
/*
String Deger
Object Literal Deger
Function Deger
*/

// map boyutu( size )
console.log(myMap.size) // 3. 3 eleman var.

///////////////////////////////////////////////////////////////////////////
const cities = new Map();
cities.set("Ankara",06);
cities.set("İstanbul",34);
cities.set("İzmir",35);
// for each kullanalim
cities.forEach(function(value,key){
    console.log(key,value);
});
/*
Ankara 6
İstanbul 34
İzmir 35
*/

//////////////////////////////////////////////
// for of kullanalim
for(let value of cities){
    console.log(value);
}
/*
["Ankara", 6]
["İstanbul", 34]
["İzmir", 35]        Herbir value bir array'e denk geldi.
*/

// key ve valuelari ayri ayri almak istersek
for(let [key,value] of cities){
    console.log(key);
    console.log(value);
}

// bunun daha guzel yontemi
for(let key of cities.keys()){
    console.log(key);
}

for (let value of cities.values()){
    console.log(value);
}

//////////////////////////////////////////////

// arrayler ve mapler arasinda bir bag var. 
// arrayden map olusturalim 

const array = [ ["key1","value1"], ["key2","value2"] ];
const lastMap = new Map(array);

console.log(lastMap); // arrayden map olusturmus olduk.
// Map(2) {"key1" => "value1", "key2" => "value2"}

// map'ten array olusturalım 
const cities2 = new Map();
cities2.set("Ankara",06);
cities2.set("İstanbul",34);
cities2.set("İzmir",35);

const array2 = Array.from(cities2); // !!!!!!!!!!!!!!! ONEMLI

console.log(array2);
/*
(3) [Array(2), Array(2), Array(2)]
0: (2) ["Ankara", 6]
1: (2) ["İstanbul", 34]
2: (2) ["İzmir", 35]
*/

