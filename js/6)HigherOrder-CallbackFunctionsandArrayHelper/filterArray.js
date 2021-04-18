const bitkiler = [

    {ad :'uzum',tur :'meyve'},
    {ad :'cilek',tur :'meyve'},
    {ad :'muz',tur :'meyve'},
    {ad :'ispanak',tur :'sebze'},
    {ad :'kereviz',tur :'sebze'},
]

// sadece meyvelerden olusanlari tutalim.
function meyveleriBul() {
    const geciciDizi=[]
    for(let i=0;i<bitkiler.length;i++){

        if(bitkiler[i].tur==='meyve'){
            geciciDizi.push(Bitkiler[i])
        }
    }
    return geciciDizi
}

console.log(meyveleriBul())

////////////////////////////////////////////////////////////////////////////////
// bu kisma kadar filter kullanmadik.

const meyveler = bitkiler.filter(function (bitki){
    return bitki.tur==='meyve'
})

const sebzeler = bitkiler.filter(function (bitki){
    return bitki.tur==='sebze'
})

console.log(sebzeler)
console.log(meyveler)


////////////////////////////////////////////////////////////////////////////////////
// kendi filtre yapimizi kuralim.

function kendiFilterYapim(dizi,filtreSartlari){
    const geciciDizi=[]
    for(let i=0;i<dizi.length;i++){
        const sonuc=filtreSartlari(dizi[i]) // bu true ya da false doner
        if (sonuc){
            geciciDizi.push(dizi[i])
        }
    }
    return geciciDizi
}

function filtre(bitki,sart){
    return bitki.tur==sart
}

const meyveler=kendiFilterYapim(bitkiler,filtre)
console.log(meyveler)
