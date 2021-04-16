//Aslinda iki tip veri tipi var.
//Primitive ve Referans veri tipleri.

//Primitive Tipler : number,string,boolean,undefined,null,symbol
//Referans Tipler : Object

let sayi=20
console.log(sayi)

//degisken turunu anlamak icin typeof
console.log(typeof sayi)

let Isim='Volkan'
let Soyisim ='Karakus'
let tamIsim = Isim+' '+Soyisim
console.log(tamIsim)

//bu sekilde +'lamak yerine soyle yapabiliriz :
//template literal :
let tamIsim2=`${Isim} ${Soyisim}` //altgr + , tuslariyla ters tirnak acarak yapiyoruz.
console.log('Template Literal: '+ tamIsim2)
console.log(`Template Literal ile yazdirma ${tamIsim2} `)

let asalSayiMi=true;
console.log(`Veri Turu : ${asalSayiMi}`)

//UNDEFINED
let renk;
console.log(renk) //renk tanimlanmis ama degeri yok - undefined

//NULL
let age=null
console.log(`deger : ${age} ,veri turu ${typeof age}`)
