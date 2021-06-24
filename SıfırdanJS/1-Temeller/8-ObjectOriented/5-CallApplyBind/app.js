// Call, Aplly ve Bind fonksiyonlari; 
//   fonksiyon protoype'leri icinde bulunan 3 tane fonksiyondur.

const obj1 = {
    number1 : 30,
    number2 : 40
};

const obj2 = {
    number1 : 10,
    number2 : 50
};

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

// number1 ve number2 objelerin icinde. Bunu call ile cagirabiliriz
addNumbers.call(obj1,100,200); // Ilk parametre obje olucak.
addNumbers.call(obj2,450,110); // 620

// CALL SAYESINDE ISTEDIGIMIZ FONKSIYONU OBJE ILE BERABER KULLANABILIRIZ

// Apply da call gibi calisir ama objeden sonraki parametre arguman listesi yani ARRAY
addNumbers.apply(obj1,[100,200]) // ilk parametre obje sonra array
addNumbers.apply(obj2,[551,213]) 

// Bind ile yine objeyle fonksiyonu bagliyoruz
//   bind fonksiyonu bize kopya bir fonksiyon uretir(call ve apply'dan farki bu)
//   genelde eventlerde kullanilir.
function getNumbersTotal (number5,number6){
    return this.number1 + this.number1 + number5 + number6;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyResult = copyFunc1(100,200);

console.log(copyResult); // 360

