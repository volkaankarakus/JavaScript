// JS object oriented bir dildir, ama bu JS'in Java ya da C# gibi oldugu anlamina gelmez.
// OOP bir aile ise, class based onun bir parcasidir diyebiliriz. protype-base gibi.

// JS'te class tanimi, diger diller gibi degil,
// daha onceki Object tanimlarinin kolay bir hali diyebiliriz.

class Person{

    static sayac = 0 ; // static tanimlar objeye ait degil class'a ait. O yuzden burada tanimladik. 
                        // static bir fonksiyon da tanimlanabilirdi. Herhangi bir nesneye bagli kalmadigi icin nesneler arasi kiyas yapabiliriz mesela.

    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
        Person.sayac++;
    } 

    //objeler icin ortak bir fonksiyon yazalim.
    selamVer() {
        return `merhaba ben  ${this.ad +" "+this.soyad}`;
    }

}

const volkan = new Person('volkan','karakus');
const ali = new Person('hasan','ali');

// suanda iki obje de ayni fonksiyonu kullanabilir.
console.log(volkan.selamVer());
console.log(ali.selamVer());


// class'ta kalitim yapalim
class Ogrenci extends Person {
    constructor(ad,soyad,yas){
        super(ad,soyad);
        this.yas = yas;
    }

    yasiniSoyle(){
        return `ben ${this.yas} yasindayim.`
    }
}
const ayse = new Ogrenci('ayse','fatma',30);
console.log(ayse.selamVer());
console.log(ayse.yasiniSoyle());

// olusturulan Person sayisina bakalim :
console.log('Olusturulan person sayisi : '+ Person.sayac);