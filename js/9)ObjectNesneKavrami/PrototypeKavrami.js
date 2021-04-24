function Ogrenci(ad,yas,evliMi){
    this.isim=ad;
    this.yas=yas;
    this.evliMi=evliMi;
} 

// ogrencilerin hepsi ITU'de okuyorsa ben bunu prototype yapisinda verebilirim.
// prototype ile ya ortak ozellik ya da yazilacak bir fonksiyon verilir.

Ogrenci.prototype.okul='ITU';
Ogrenci.prototype.bilgileriGoster= function {
    return `ismim ${this.isim}, yasim ${this.yas} ve okulum ${this.okuduguOkul}`;
}

const emre= new Ogrenci('emre',32,false);
const hasan=new Ogrenci('hasan',22,false);

console.log(emre.bilgileriGoster());

console.log(emre.constructor.prototype); // bunu diyerek prototype olarak neler girilmis gorebiliriz. 
// ya da :
//console.log(Object.getPrototypeOf(emre)) diyerek de yapabilirim.


