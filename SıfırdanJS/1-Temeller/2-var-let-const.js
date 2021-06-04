//var
var a=10;
var name="Volkan";
a=20;
console.log(a); // var degiskeni degistirilebilirdir.

//let
let name2="Volkan";
//let name2="Volkan Karakus"; //Uncaught SyntaxError: Identifier 'name2' has already been declared hatasi aldik.

//const
const name3="Murat";
//name3="Ali" // Uncaught TypeError: Assignment to constant variable.
console.log(name3);

const f; // constla tanimli satirda deger verilmeli, sonradan deger verilemiyor.
f=30;
console.log(f) // Uncaught SyntaxError: Missing initializer in const declaration

const dizi=[1,2,3,4,5,5,66,7]; 
// dizi=[1,3,4,6] diyip bastan tanimlayamiyorum ama a'ya deger ekleyebiliyorum cunku adresi degismiyor.
dizi.push(88);

 


