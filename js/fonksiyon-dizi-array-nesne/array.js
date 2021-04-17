let arabaMarka1='Mercedes'
let arabaMarka2='Audi'
let arabaMarka3='BMW'

let arabaMarkalari=['Mercedes','Audi','BMW']
console.log('araba dizisi : '+arabaMarkalari.toString())

//eleman eklemek istiyorsam
arabaMarkalari[3]='Honda'

//sirayla markalari yazdiralim:
//1.YONTEM
for(let i=0;i<arabaMarkalari.length;i++){
    console.log(arabaMarkalari[i])
}

//2.YONTEM
//indexler umrumuzda degil, sadece elemanlari istiyorsak
for(let oAnkiDiziElemani of arabaMarkalari){
    console.log(oAnkiDiziElemani) // i kullanmadigimiz icin boyle yaziyoruz.
}

