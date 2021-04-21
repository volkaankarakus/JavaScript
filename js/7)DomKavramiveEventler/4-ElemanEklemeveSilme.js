const yeniListeElemani= document.createElement=('li')
yeniListeElemani.className= 'liste-item'
yeniListeElemani.textContent='Mugla'
yeniListeElemani.id='yeni-id'
yeniListeElemani.setAttribute('deger','yeni-deger') //attribute adi deger, karsiligi da yeni deger.


//simdi bu yapiyi ul'nin icine eklicez.
document.querySelector('ul').appendChild(yeniListeElemani)

console.log(yeniListeElemani)

document.querySelector('h2').textContent='asdadasd' // textContent ile yeni deger atadik.

// yeni bir h6 olusturup, replace edebilir miyim ?
const yeniKucukBaslik=document.createElement('h6')
yeniKucukBaslik.id='h6ID'
yeniKucukBaslik.textContent='Yeni Baslik'


const eskiBaslik=document.querySelector('h2')
const baslikParent=document.querySelector('body') // bunun icinde oldugu icin degistirirken once adresi bilmem gerekiyor.
baslikParent.replaceChild(yeniKucukBaslik,eskiBaslik)
console.log(yeniKucukBaslik)

// ozetle replace yapabilmemiz icin parent'i bulmamiz lazim,daha sonra yeni ve eskiBasligi replace'in icine yaziyoruz.

// remove
const listeItem=document.querySelector('li')
listeItem.remove()

// komple ul'yi silersem icindeki butun yapilar gider
document.querySelector('ul').remove()

// ul'yi degil de, ul'nin bir Child'ini silelim.
document.querySelector('ul').removeChild(document.querySelectorAll('li'[0])) // 0. elemanini sildik.



console.log(listeItem)





