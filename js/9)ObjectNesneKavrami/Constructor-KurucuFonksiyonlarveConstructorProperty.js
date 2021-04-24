// object nedir


// object literals
const volkan={
    ad:'volkan',
    yas:26,
    evliMi: false,
    sevdigiRenkler:['kirmizi','yesil'],
    adres :{
        il:'Ankara',
        plakaKodu: 06,
        ilce: 'Cankaya',
    },
    bilgileriGoster : function (){
        return `adim ${this.ad} yasim ${this.yas}`;  // this. o anki objeyi gosterir. (template literal)
    },
    fullName:'volkan karakus',
    
    // eger key'lerde - isareti varsa koseli parantez icinde kullanmamiz gerekiyor.
    ['tamIsim']: 'volkanKarakus',
}

console.log(volkan.yas); // ya da volkan['yas'] da olur.
console.log(volkan.bilgileriGoster());


// deger guncellemek istersem
volkan.yas=30;
volkan.okul='TOBB ETU';
delete volkan.okul;

// her ogrenci icin boyle uzun uzun kodlar yerine sunu yapalim:
function createOgrenci(ad,yas,evliMi,okul){
    return {
        isim: ad,
        yas: yas,
        evliMi: evliMi,
        okuduguOkul: okul,
        bilgileriGoster: function(){  // object'in icindeki fonksiyona METHOD denir.
            return `ismim ${this.isim}, yasim ${this.yas} ve okulum ${this.okuduguOkul}`;
        }
    }
}
const emre= createOgrenci('emre',24,false,'akdeniz');
const berkay= createOgrenci('berkay',26,false,'kibris');

console.log(volkan.bilgileriGoster())

// *************************************************************************************************************
// constructor functions
// bunu kullandigimizda yine bir Object elde edicez.
// ogrenci constructor'i olusturalim ve parametreleri bir ogrenciyi diger ogrenciden ayiran seyler olsun

function Ogrenci(ad,yas,evliMi,okul){
    this.isim=ad;
    this.yas=yas;
    this.evliMi=evliMi;
    this.okuduguOkul=okul;
    this.bilgileriGoster= function {
        return `ismim ${this.isim}, yasim ${this.yas} ve okulum ${this.okuduguOkul}`;
    } 
}

const yunus=Ogrenci('yunus',30,false,'itu');
console.log(yunus) // bunu dedigimizde undefined gozuktu. cunku Ogrenci icinde fonksiyonun return'u yok. bunu constructor tanimlarken 'new' koyarak yapıyoruz.

const yunus=new Ogrenci('yunus',30,false,'itu');
console.log(yunus) // simdi oldu.

// new kullanildiginda 3 sey gerceklestirilir.
//1 yeni bir object olusturur.
//2 return yazmak zorunda kalmayiz.
//3 this kelimesini o an olusturulan nesneye baglar.

