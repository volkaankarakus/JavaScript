let myAge=25

console.log(myAge)
console.error('Yanlis İslem')
console.warn('Gucsuz sifre')

//console.clear() :butun yazilari temizler. 

console.table({ad:"Volkan", yas:26})

//iki kod arasi satirin ne kadar surede calistigi
//parantez icinin ne oldugu onemli degil,
// yeterki baslangic ve bitis icin ayni olsun.

console.time("id")
console.log("aaaaaa")
console.log("aaaaaa")
console.log("aaaaaa")
console.log("aaaaaa")
console.log("aaaaaa")
console.timeEnd("id")
console.clear()



//ALERT KOMUTU(sitede yukarida bir kutucuk cikari ve yazi yazar.)
//alert('Hello World')

//PROMPT KOMUTU(input alir.)
let girilenSayi = prompt("Bir sayi giriniz :");
console.log(girilenSayi)