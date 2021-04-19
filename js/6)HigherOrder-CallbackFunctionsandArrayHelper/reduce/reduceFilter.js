// reduce ile filter uygulamasi

//filter dedigimde bir sart veriyordum ve bu sarti saglayan elemanlari bana donduruyordu.
sayilar=[11,22,40,30]
const filterDizi=sayilar.filter(function (sayi,index){
    return sayi<30
})

console.log(filterDizi)
////////////////////////////////////////////

const yeniDiziwithReduce=sayilar.reduce(function (pre,sayi,index){
    if (sayi<30){
        pre.push(sayi)
    }
    return pre
},[])

console.log(yeniDiziwithReduce)