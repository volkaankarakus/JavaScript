// ****************** 1 **************************
//Degisken olusturup, bu degerde saniye degeri tutun.
//Bu degerin kac dakika ve kac saniyeye denk geldigini bulun.
//1200 degeri icin 20 dakika ve 0 saniye yazmalidir.

let saniyeString=prompt('Saniye Degeri Giriniz :','200')
let saniye=parseInt(saniyeString)//parseInt, integer'a cevirir.

let dakika=parseInt(saniye/60)
let kalanSaniye=parseInt(saniye%60)

console.log(typeof saniye)
console.log(`Girilen deger : ${dakika} dakika ve ${kalanSaniye} saniyedir.`)


// ****************** 2 **************************
//Degisken olusturup fahrenheit cinsinden sicaklik saklayin,
//Sonrasinda bu degerin kac Celcius oldugunu bul.
//formul : celcius =(5/9 * fahrenheit-32)
let fahrenheit=prompt('Sicaklik Giriniz')
let sicaklik=parseInt(5/9 * fahrenheit-32)
console.log(`Girilen ${fahrenheit} degerinin sicakligi ${sicaklik} derecedir.`)

