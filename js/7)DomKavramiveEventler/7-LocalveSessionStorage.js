// local ve session storage 
// ikisinin farki : local'de kodla veya kullanici eliyle silene kadar kalir, session'da web browser kapanana kadar kalir.

// local storage eleman ekleme
localStorage.setItem('ad','volkan') // sadece string veriler saklanabiliyor
localStorage.setItem('il','Ankara')

// eleman eklemeyi gorduk, bu elemani nasil okuruz
console.log(localStorage.getItem('yas'))

// silmek istersem
localStorage.removeItem('yas')

// butun degerleri silmek istersem
localStorage.clear()

// *************************************

const ulListesi=document.querySelector('.liste')//var olan elemanlari yazdirmak istiyorsam diye bu satiri en son ekledik
const isimlerDizisi=JSON.parse(localStorage.getItem('isimListesi'))


if(isimlerDizisi!=null ){
    isimlerDizisi.forEach( function (isim){
        const yeniLi=document.createElement('li')
        yeniLi.textContent=isim
        ulListesi.appendChild(yeniLi)
    })
}


document.querySelector('#form').addEventListener('submit', function (e){
   
   const yeniIsim=document.querySelector('.isim').value // bunu aldik ve localstorage'a eklicez.
   let isimDizisi=[]


   if(localStorage.getItem('isimListesi')===null){
       isimDizisi=[]
   }
   else {
       isimDizisi=JSON.parse(localStorage.getItem('isimListesi')) // string ifadeyi JSON'a donusturuyor.
   }
   isimDizisi.push(yeniIsim)

    localStorage.setItem('isimListesi',JSON.stringify(isimDizisi)) //local storage'a ekledik. 
    const yeniLi=document.createElement('li')
    yeniLi.textContent=yeniIsim
    ulListesi.appendChild(yeniLi)


    e.preventDefault()
})

// isimListesi, birden fazla string tutucak. Bunu array olarak tutamadigimiz icin once JSON'a donusturucez, sonra buraya aldik.
