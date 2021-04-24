function Ogrenci(ad,yas,evliMi){
    this.isim=ad;
    this.yas=yas;
    this.evliMi=evliMi;
} 

// ogrencilerin hepsi ITU'de okuyorsa ben bunu prototype yapisinda verebilirim.
// prototype ile ya ortak ozellik ya da yazilacak bir fonksiyon verilir.

Ogrenci.prototype.okul='ITU';
Ogrenci.prototype.bilgileriGoster= function() {
    return `ismim ${this.isim}, yasim ${this.yas} ve okulum ${this.okuduguOkul}`;
}

const emre= new Ogrenci('emre',32,false);
const hasan=new Ogrenci('hasan',22,false);

console.log(emre.bilgileriGoster());

console.log(emre.constructor.prototype); // bunu diyerek prototype olarak neler girilmis gorebiliriz. 
// ya da :
//console.log(Object.getPrototypeOf(emre)) diyerek de yapabilirim.

// OBJECT'LERLE ILGILI BIRSURU SEY OGRENDIK. 
//NORMALDE OBJECTLERDE . DİYİP DEGER ATAMASI YAPIYORDUK.YA DA BU DEGERLERİ OKUYABİLİYORDUK.
// STRING GIBI INT GIBI PRIMITIVE TIPLER ICIN ALABILECEGI FONKSIYONLARA BAKALIM.
const stringBirIsim='volkan'
console.log(stringBirIsim.constructor.prototype); // bu sekilde bakabiliriz.
console.log(stringBirIsim.charAt(0)); // diyerek ilk harfi olan v'yi de yazdirabiliriz.
// PRIMITIVE BIR STRINGE OBJECT GİBİ DAVRANIP . KOYUP FONKSIYON CAGIRIRSAK : ismi, 'String' DİYE BİR OBJECT'NIN ICINE KOYAR VE SONRA GERI CIKARTIR.
// BU PRIMITIVE YAPIYI KALICI HALE GETIRMEK ISTIYORSAK :
const renk1='renk' // primitive yapi. İstedigimiz sey bu degil
renk1.asd='adsasdas' // bu hata verir.


const renk=new String('kirmizi');
console.log(typeof renk);//cevap object cikti. yani istedigimiz sekile getirdik.

const yil=new Number(1995);
yil.sdfsdf='adfsdfsfdsdf' ; //bu artik Object haline geldigi icin hata vermez.
console.log(typeof yil);


