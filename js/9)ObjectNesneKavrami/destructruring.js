// array destructuring 
let isim=['volkan','hasan'];

const ad = isim[0];
const soyad = isim[1];

const [first,last] = isim;

console.log(first,last);

const renkler = ['sari','yesil','mavi','kirmizi','kahverengi','turuncu','mor'];

const [r1,r2] = renkler;
console.log(r1,r2); // r1,r2'den sari ve yesil ciktisi alirim.

const [c1,c2, ...geriKalanRenkler] = renkler;
console.log(geriKalanRenkler) // geriKalanRenkler'de mavi ve devamindaki renkler tutulur.


// default deger atamasi
const [t1, t2, t3='Bilinmiyor', t4='Tanimlanmadi'] = ['galatasaray','fenerbahce','besiktas'];
console.log(t1,t2,t3,t4); // galatasaray, fenerbahce, besiktas, Tanimlanmadi

// Object Destructuring 
let ayarlar ={
    baslik : 'JS Baslik',
    genislik : '300px',
    yukseklik : '300px'
};

console.log(ayarlar.baslik);
//her seferinde ayarlar.baslik, ayarlar.genislik, ayarlar.yukseklik demektense ben bunu kisaltabilirim

const {baslik:b,genislik:g,yukseklik:y} = ayarlar ;
console.log(b,g,y); //bu sekilde yazabiliriz.


