let sayilar = [1,2,3,4,5,6,7]

for(let i=0;i<sayilar.length;i++){
    console.log(sayilar[i])
}

///////////////////////////////////////////////////////////////////
console.log('*****************************************')

for(let herbirsayi of sayilar ){
    console.log(herbirsayi)
}

///////////////////////////////////////////////////////////////////
console.log('*****************************************')

//FOR-EACH
sayilar.forEach( function (sayi,i) {
    console.log(sayi,i)                // sayi : herbir eleman,  i:index 
} )

// index tutmak istemezsek 2. parametre olan i'yi kaldirabiliriz. 
////////////////////////////////////////////////////////////////////

//kendi for-each'imizi yazalim.

diziyiYaz(sayilar,function (deger,index){
    console.log('deger : '+ deger +' index :'+index )
})

function diziyiYaz(dizi,callback){
    for( let i=0;i<dizi.length;i++){
        callback(dizi[i],i)
    }
}
