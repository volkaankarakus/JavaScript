// person kurucu fonksiyonumuz olsun

function Person(ad,soyad){
    this.ad=ad;
    this.soyad=soyad;
}

//bunlara prototype tanimlayalim : yani herbir object'te tanimlamasak bile erisebilecegi bir fonksiyon
Person.prototype.selamVer = function() {
    return `Merhaba ben ${this.ad} ${this.soyad}`;
}

const volkan = new Person('volkan','karakus');
const hasan = new Person('hasan','ak');

console.log(volkan.ad);
console.log(volkan.selamVer())

// **********************************************************************************************************************
function Ogrenci(ad,soyad,yas,sinif) {
    this.ad=ad;
    this.soyad=soyad;
    this.yas=yas;
    this.sinif=sinif;
}

Ogrenci.prototype.selamVer = function() {
    return `Merhaba ben ${this.ad} ${this.soyad}.Yasim ${this.yas} ve ${this.sinif}. sinifa gidiyorum. `
}

const ayse= new Ogrenci('ayse','fatma',23,3)
console.log(ayse.selamVer())
// selamVer prototype'ini hem Person hem de Ogrenci icin tekrar tekrar yazdik. Boyle yapilarda KATILIM'i kullanmaliyiz.

// DRY bir kod yazmamiz icin yukariya baktigimizda hem Person da hem de Ogrenci de ad ve soyad ortak, prototype olarak da selamVer ortak 
// o zaman bunlari soyle bastan yazalim :

// person kurucu fonksiyonumuz olsun

function Person2(ad,soyad){
    this.ad=ad;
    this.soyad=soyad;
}

function Ogrenci2(ad,soyad,yas,sinif) {
    Person.call(this,ad,soyad);
    this.yas=yas;
    this.sinif=sinif;
}

// suanda ayni kodlari tekrarlamamis olduk. Ogrenci2, Person2'den ad ve soyad'i kalitim olarak aldi.
// simdi Person2'ye bir prototype verip, bunu kalitimla Ogrenci2'ye atalim.

Person2.prototype.selamVer = function() {
    return `Merhaba ben ${this.ad} ${this.soyad}`;
}

Ogrenci2.prototype = Object.create(Person2.prototype);

const ali= new Ogrenci2('ali','veli',30,4);
console.log(ali.selamVer())


// ogrenciye yasini soylettirelim
Ogrenci2.prototype.yasiniSoyle = function () {
    return `Merhaba ben ${this.yas} yasindayim.`
}

// *********************************************************************************************************************************
function MyArray(){

}

const myArray = new MyArray();
console.log(myArray); // bunu yazdirdigimda bos bir Object gormeyi bekliyorum.

MyArray.prototype = Object.create(Array.prototype);
myArray.push(1234123);
myArray.push(asdasdasd);
myArray.push(sdfjnsdfnsnjfnsjf);

console.log(myArray);
 
