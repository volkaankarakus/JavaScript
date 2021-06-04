let value;

const numbers=[43,454,5656,123,4356,3457,12];

const langs=["JS","Python","C++","Java"];


const a=["Merhaba",22,null,undefined,3.14];

value=numbers.length;

value=numbers[0];
value=numbers[numbers.length-1];

//herhangi bir index degerini degistirme
numbers[2]=1000;
value=numbers;


//indexOf
value=numbers.indexOf(1000);

//Basina Deger Ekleme
numbers.unshift(23); // [23,43,1000,5656,123,4356,3457,12]


//Sonundan Deger Atma
value=numbers.pop(); // [23,43,1000,5656,123,4356,3457]


//Basindan Deger Atma
value=numbers.shift(); // [43,1000,5656,123,4356,3457]

//Bastan Belli Bir Index'e Kadar Deger Atma
value=numbers.splice(0,3) // [123,4356,3457] 3.index dahil degil.

//Reverse
value=numbers.reverse(); // [3457,4356,123]


//Kucukten Buyuge Siralama
value=numbers.sort(function(x,y){
    return x-y;
});

//Buyukten Kucuge Siralama
value=numbers.sort(function(x,y){
    return y-x;
});


console.log(value);