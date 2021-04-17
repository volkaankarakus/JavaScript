function selamVer({
    console.log('Selam')
})

selamVer() // diyerek yukaridaki fonksiyonu cagirdik.

const selamVerDegisken=function(){ //const ve let ile bir degisken tanimlarken, bu degiskeni fonksiyon olarak da tanimlayabiliriz.
    console.log('merhaba selamVerDegisken')
}

selamVerDegisken()


///////////////////////////////////
/////////ES6-FAT ARROW
const fatArrow= _ => {   // degisken seklinde bir fonksiyon tanimladik.Fonksiyonun ici bossa _ ile de tanimlanabilir.
    console.log('merhaba fatarrow')
}

fatArrow()

////////////////////////////////////

function karesiniAl(sayi){
    return sayi*sayi
}
console.log(karesiniAl(5))

//simdi bunu fatarrow ile yapalim.

const fatArrowParametreli=(sayi) =>{ //tek bir parametre aldigi icin (sayi) yerine sayi yazabilirdik.
    return sayi*sayi
}
console.log(fatArrowParametreli(8))

//tek parametreli bir ifadenin en kisa hali :
const fatArrowParametresiKisa = sayi => sayi*sayi; // *********************
console.log(fatArrowParametresiKisa(9))

//iki sayiyi toplayan fatarrow
const sayilarinToplami=(s1,s2) => s1+s2; // *****************************
console.log(sayilarinToplami(5,10))


