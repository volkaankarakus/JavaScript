// ornegin module1 icinde bir tane fonksiyonumu export etmek istiyorum
// baska bir dosyada kullanilmasi icin bunu dis dunyaya aktarmak istiyorum
// bunun icin "module.exports" diye birsey kullanicaz

module.exports.test1 = function test1(){
    console.log("test1");
}

/*
index1.js'de:
 const app = require("murat"); seklinde birsey tanimlarsak "murat" node_modules altinda aranir.
 const app = require("./module1") dersem, module 1 i index1.js'ye dahil et demek.
*/

module.exports.test2 = function test2(){
    console.log("test2");
}

/*
module1.js'de 1den fazla module tanimliyorsak bunu index.js'de cagirirken hep son modulu cagirir.(tek bir fonksiyon export edebiliyoruz)
birden fazla module export etmek istiyorsak bunlara bir key vermemiz gerekiyor : obje olarak export etmek => module.exports.test1() gibi.
*/

// her seferinde module.exports yazmak yerine bunu daha guzel yazabiliriz
module.exports = {
    name : "Mustafa",
    test3 : function () {
        console.log("test1");
    },
    person : {
        name : "Volkan",
        mail : "volkankarakus48@gmail.com"
    }
}

////////////////////////////////////////////////////////////////////////////////////////////
// ES6 MODULLERINI KULLANALIM
export const name = "Ali" ; // exportla dis dunyaya aktar

export function test4() {
    console.log("Test4 Function");
}

export class Person2 {
    static Test5(){
        console.log("Person2 Test");
    }
}

export const employee = {
    name : "Ayse",
    salary : 4000
}

// default olarak export etmek icin
export default class Deneme {
    static deneme(){
        console.log("Default deneme");
    }
}
/*
default olmasaydi bunu index1.js'de soyle cagiricaktik:
    import {Deneme} from "./module1";
    Deneme.deneme();
default koyarak bunu su hale getirebiliriz :
    import Deneme from "./module1";
    Deneme.deneme();
*/

////////////////////////////////////////////////////////////////////////////////////
// bir degiskeni olusturup sonra da export edebiliriz
const denemeValue = "Deneme stringi";
export default denemeValue;

// bunu da index1.js'de soyle cagirabiliriz :
//  import denemeValue from "./module1" seklinde cagirabiliriz.
//  console.log(denemeValue);


