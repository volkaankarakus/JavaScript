const person = {
    name : "Volkan Karakus",
    age : 25,
    salary : 3000
};

const langs = ["Python","JS","Java","C++"];

const name1 ="Volkan";

// FOR IN
// Object
for( let prop in person ){
    console.log(prop);
} // goruldugu uzere objede gezindi ama degerleri alamadik
/*
name
age
salary
*/
////////////////////////////////////////
for( let prop in person ){
    console.log(prop,person[prop]);
} 
/*
name Volkan Karakus
age 25
salary 3000
*/
///////////////////////////////////////////////////////////////////////////////////////
// arraylerde
for( let index in langs){
    console.log(index); // 0,1,2,3 dondu. yani degerler uzerinde degil, arraylerde indexler uzerinde geziniyoruz.
}
// buna karsilik gelen degeri de 
for( let index in langs){
    console.log(index,langs[index]);
}

// stringlerde 
for ( let index in name1) {
    console.log(index,name1[index]); // sadece index deseydik yine 0 1 2 3 4 5 donucekti.
}
/* 
0 V
1 o
2 l
3 k
4 a
5 n
*/

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// FOR OF ///////////////////////////////////////////
// for of ile objeler uzerinde gezinemiyoruz,
//     sadece array'e benzeyen veri tipleri uzerinde gezinebiliyoruz
//      string, array, querySelectorAll ile aldigimiz elementler uzerinde gezinebiliriz.

// arraylerin artik indexleri uzerinde degil, degerleri uzerinde gezinicez
for( let value of langs){
    console.log(value);
}
/*
Python
JS
Java
C++
*/
//////////////////////
for( let character of name1){
    console.log(character);
}
/*
V
o
l
k
a
n
*/

