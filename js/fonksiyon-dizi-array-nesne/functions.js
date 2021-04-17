function selamVer(){
    console.log('Merhaba.')
}

selamVer() //bu fonksiyon cagirmayi yukaridaki koddan once de cagirabilirdik, boyle bir avantaj var.


sayilariTopla()

function sayilariTopla(sayi1,sayi2){
    console.log('Girilen iki sayinin toplami '+(sayi1+sayi2))
    return sayi1+sayi2 //fonksiyon icinde return'un alt satirina yazilmis kodun onemi yok, return'u gordugunde fonksiyondan cikar.
}

//returnle toplami deger vererek bir ornekte tutalim.
let toplam=sayilariTopla(10,20)


function belirliAraliklarlaSayiTopla(baslangicSayisi,bitisSayisi){

    let toplam=0
    for(let i=baslangicSayisi;i<=bitisSayisi;i++){
        toplam=toplam+i
    }
    console.log('Toplam:'+toplam)
    return toplam
}
let toplam1=belirliAraliklarlaSayiTopla(1,20)
let toplam2=belirliAraliklarlaSayiTopla(55,80)




