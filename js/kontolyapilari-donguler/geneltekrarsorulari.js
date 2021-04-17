/*
//  *************************1************************
// klavyeden girilen 3 sayinin ortalamasini alan bir uygulama yaziniz.

let ilksayi=parseInt(prompt('Ilk sayiyi giriniz:'))
let ikincisayi=parseInt(prompt('Ikinci sayiyi giriniz:'))
let ucuncusayi=parseInt(prompt('Ucuncu sayiyi giriniz:'))
console.log(`Ilk girilen sayi : ${ilksayi} Ikıncı girilen sayi ${ikincisayi} Ucuncu girilen sayi ${ucuncusayi}`)
let avg=(ilksayi+ikincisayi+ucuncusayi)/3
console.log(`Girilen sayilarin ortalamasi : ${avg}`)


//  *************************2************************
//Gecme notu 50, vize 40%, final %60 olsun.
let vizeNotu=parseInt(prompt(`Vize notunu giriniz :`))
let finalNotu=parseInt(prompt(`Final notunu giriniz :`))
let ortalamaNot=(vizeNotu * 0.4 + finalNotu * 0.6)

if(ortalamaNot<50){
    console.log(`Ders ortalama notunuz ${ortalamaNot} ve dersten FF alarak kaldiniz.`)
}
else{
    console.log(`Ders ortalama notunuz ${ortalamaNot} ve dersten gectiniz.`)
}

//  *************************3************************
//Kendi adini 5 kere ekrana yazan uygulamayi tum dongulerle yaziniz.
//FOR LOOP
let isim=prompt('Adinizi giriniz :')
for(let i=0;i<5;i++){
    console.log(isim)
}

//WHILE LOOP
let isim=prompt('Adinizi giriniz :')
count=0
while(count<5){
    console.log(isim)
    count++
}


//  *************************4************************
// Klavyeden girilen sayinin faktoriyelini alan uygulama
let girilenSayi=parseInt(prompt('Faktoriyeli alinacak sayiyi giriniz:'))
result=1
for(i=1;i<girilenSayi+1;i++){
    result=result*i
}
console.log(`${girilenSayi}nin faktoriyeli : ${result}`)
*/
//  *************************5************************
// Kullanicidan aldiginiz integer degere kadar olan tum asal sayilari yazdiran program
// 10 icin ekranda 2,3,5,7 degeleri olmalidir.

let girilenSayi=parseInt(prompt('Bir deger giriniz :'))
let gosterilecekMetin=""
for(let i=2;i<=girilenSayi;i++){

    let asalsayiMi=true
    for(let j=2;j<i;j++){
        if(i%j==0){
            asalsayiMi=false
            break
        }
    }
    if(asalsayiMi==true){
        gosterilecekMetin=gosterilecekMetin+i+" "
    }
}
console.log(gosterilecekMetin)
