let insanlar=['ali','veli','ayse','mahmut']

console.log(insanlar.toString()) //varsayilan bir metin olarak gosterir.

//elemanlari belli bir isaretle bolmek istersem JOIN
console.log(insanlar.join(' | '))

//dizinin sonuna eleman ekleme
//pythondaki append() methodu, buradaki push() methodu
insanlar.push('Fatma')

//dizinin basina eleman ekleme
insanlar.unshift()

// push'un bir degiskene esitlenmesi durumunda eklenmis halinin dizi eleman sayisini dondurur
let diziElemanSayisi=insanlar.push('John') //diziElemanSayisi=6 doner.

//diziden eleman cikarmak istiyorsak pop(). degiskene esitlersek son elemani verir.
let cikarilanEleman=insanlar.pop()
console.log(insanlar+' cikarilan eleman'+ cikarilanEleman)

//diziden ilk elemani silmek istiyorsak shift()
insanlar.shift()
const cikarilanIlkEleman=insanlar.shift() //bunu bir degere verebiliriz.

//diziden eleman silmek istiyorsak 
delete insanlar[6]


//*****************
// yeni bir dizi olusturalim.
let sayilar=[1,2,3,4,5,6,7,8,9,10]

sayilar.splice() // kacinci index, silme, birseyler ekleyebilirsin
sayilar.splice(7,0,9,10) //7. elemandandan basla, hicbir elemani silme, 9 ve 10'u ekle.


//0. elemandan baslayarak 4 tane eleman sil, hicbirsey ekleme
sayilar.splice(0,4)
console.log(sayilar.toString())

//bunu bir degiskene esitlersem silinenleri verir
let silinenElemanlar=sayilar.splice(0,4)

//iki tane diziyi birlestirmek istiyorsak CONCAT()
let tekSayilar=[1,3,5,7,9]
let ciftSayilar=[0,2,4,6,8]

let concatSayilar=tekSayilar.concat(ciftSayilar)
console.log(concatSayilar.toString()) //1,3,5,7,9,0,2,4,6,8

//dizide belli bir araligi almak
let yeniDizi=concatSayilar.slice(2,4) //2. indexten 4. index'e kadar alir(4. index dahil degil)
//slice methodu orjinal diziyi bozmaz, o aynen kalir.
















