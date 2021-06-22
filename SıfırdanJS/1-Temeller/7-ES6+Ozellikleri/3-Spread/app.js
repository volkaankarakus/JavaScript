// Spread Operator

const langs1 = ["Python","C++","Java","JS"];

console.log(langs1[0],langs1[1]); // Python C++

//spread operatoru ... ile butun indexleri tektek yazmisiz gibi kolaylik saglar
console.log(...langs1) // Python C++ Java JS

const langs2 = ["C#","TSQL"];

//langs2 ile baslayip langs1 ile devam eden array istiyorsak 
// const langs3 = ["C#","TSQL",langs1[0],langs1[1],langs1[2],langs1[3]]; yerine 
//    spread ile 
const langs3 =[...langs2,...langs1];
console.log(langs3);
/*
0: "C#"
1: "TSQL"
2: "Python"
3: "C++"
4: "Java"
5: "JS"
*/ 

//////////////////////////////////////
const nums = [1,2,3,4,5,6,7,8,9,10];
// 3ten itibaren num2 olsun. O zaman 
const [a,b,...num2] = nums;
console.log(a,b); // 1 2
console.log(num2); // [3, 4, 5, 6, 7, 8, 9, 10]

//////////////////////////////////////
// sayilarin toplamini alan fonksiyonu yazalim
const addNumbers =  (a,b,c) => console.log(a+b+c);
const num = [100,200,300];
addNumbers(...num); // 600

