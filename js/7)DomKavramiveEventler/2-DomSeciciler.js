// DOM yapisindaki elementler nasil secilir, bu secilen elementlerle neler yapilabilir?

// 1) Tek element seciciler
// 2) Sectigimizde bize birden fazla sonuc dondurecek yapilar


// 1
console.log(document.getElementById('baslik')) // dokumana git,ID'ye gore bazi elementleri bul, bana getir.

// ID degerlerimiz var, herbir elemana bu degerleri atayabiliriz.
// ve class degerlerimiz var.

// herbir elemanin bir tane ID'si olur. Kullanilan bir ID diger hicbir yerde kullanilmaz.
// ayni class'i birden fazla elemente verebiliriz. bir element birden fazla class adi da alabiliyor.


console.log(document.getElementById('baslik').id) 
console.log(document.getElementById('baslik').className)

const baslik=document.getElementById('baslik')

// elemani sectigimize gore bundan sonra ne yapabiliriz? Stilini degistirebiliriz.
/////////////////////////////////////// STIL ///////////////////////////////////////
baslik.style.backgroundColor='red' //background color
baslik.style.color='white'  // baslik rengi
baslik.style.padding='2rem' // baslik ve dikdortgeni arasindaki bosluk ayari
baslik.style.display='none' // butona basildiginda bunu kaybet

/////////////////////////////////////// ICERIK ///////////////////////////////////////
baslik.textContent ='Bu yeni baslik' 
const test=baslik.textContent// textContent ile deger atayabiliyoruz, deger de okuyabiliyoruz.
console.log(test) // ile baslik degerini bir degere de atayabiliyoruz.(okumak icin)

// .textContent ile ayni sekilde calisan .innerText yapisi var. 
baslik.innerText='Yeni Baslik'

//string ifade yerine HTML ifade yazmak istiyorsak 
baslik.innerHTML='<img src="https://source.unsplash.com/100x100" alt="">' // bu sekilde baslik kismina image ekledik.

// CSS'ten bilinen selectorlerin hepsinin burda calismasi .querySelector ile
console.log(document.querySelector('h2'))
console.log(document.querySelector('#liste'))
console.log(document.querySelector('.liste-item'))
console.log(document.querySelector('ul li'))
console.log(document.querySelector('.link.link-google'))

const myListe=document.querySelector('li')
myListe.style.color='blue'

document.querySelector('li:last-child').style.color='yellow'
document.querySelector('li:nth-child(2)').style.color='orange'
document.querySelector('li:nth-child(3)').style.color='purple'
document.querySelector('li:nth-child(odd)').style.color='teal'
document.querySelector('li:nth-child(even)').style.color='red'



// 2  // COKLU ELEMAN SECICILER

// birden fazla elemani bir kerede secmek istiyorsam 
const linkler = document.getElementsByClassName('link') // sinif isimleri birden fazla elemana atanabiliyordu.
console.log(linkler[0])
console.log(linkler[2])

linkler[0].style.color='red'
linkler[1].style.backgroundColor='#ccc' // yazinin arka plani gri oldu.
linkler[2].textContent='Instagram Linki'

console.log(document.querySelector('ul').getElementsByClassName('liste-item'))

const dizi=Array.from(linkler)
dizi.reverse()
dizi.forEach(item => {
    console.log(item)
})

const listeElemanlarim=document.getElementsByTagName('h1')
console.log(listeElemanlarim)

const sehirlerTek=document.querySelectorAll('li:nth-child(odd)')
const sehirlerCift=document.querySelectorAll('li:nth-child(even)')

sehirlerTek.forEach(item => {
    item.style.backgroundColor='#ccc'
})

for(let i=0;i<sehirlerCift.length;i++){
    sehirlerCift[i].style.backgroundColor='#eee'
}

console.log(sehirler)


