const merhaba = function() {
     console.log("Merhaba");
}

merhaba();

// ES6 ile buradaki fonksiyonu daha rahat sekilde yazabiliyoruz

// ARROW FUNCTION

const merhaba2 = () => { // function yazisini yazmaktan kurtulmus oluyoruz
    console.log("Merhaba");
}

merhaba();

const merhaba3 = (firstName,lastName) => {
    console.log("Merhaba",firstName,lastName);
}

merhaba3("Volkan","Karakus");

// eger tek parametreyse parantez yazmak zorunda degiiliz
const merhaba4 = firstName => {
    console.log("Merhaba",firstName);
}

merhaba4("Ali"); 

// fonksiyon tek bir islem yapiyorsa suslu paranteze de gerek yok
const merhaba5 = firstName => console.log("merhaba",firstName);
merhaba5("Volkan"); 

/////////////////////////////////////////////////////////////////////////////////////////////////
const cube = function(x){
    return x*x*x;
}
console.log(cube(5));

// arrow function ile yazalim
const cube2 = x => x*x*x;








