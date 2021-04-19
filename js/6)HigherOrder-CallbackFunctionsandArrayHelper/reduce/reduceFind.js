// find komutu degeri ve indexi donduruyordu.

sayilar=[11,22,40,30]

const bulunanEleman= sayilar.find(function(sayi,index) {
    return sayi===2
})

console.log(bulunanEleman)

//////////////////////////////////////////////////////////////////////////////////
const bulunanElemanWithReduce = sayilar.reduce(function (pre,sayi,index){
    if(sayi==22){
        return sayi
    }
    else {
        return pre
    }
},undefined)

console.log(bulunanElemanWithReduce)
