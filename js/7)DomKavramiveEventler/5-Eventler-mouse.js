
// tiklandiginda birsey yazdiralim
//iki parametreli : 1.si 'click', 2.'si tiklandiginda nolcagini belirleyen fonksiyon


document.querySelector('.link').addEventListener('click',function (e){
    console.log('click event calisti.')
    e.preventDefault() //HTML ciktigindan beri, bir linke tiklandiginda biyere gitmesi istenir. Bu kodla bu varsayimi yapma demis oluyoruz.

})

//********************************************************************************

document.querySelector('.link').addEventListener('click',tiklanma) //click 
document.querySelector('.link').addEventListener('dblclick',tiklanma) //double click

// ****************************************************************************************************************************

document.querySelector('.link').addEventListener('mousedown',tiklanma) //basili tuttugumda mousedown, biraktigimda click tetiklenir.

document.querySelector('.link').addEventListener('mouseup',tiklanma) //basili tuttugumda mousedown, 
                                                                        // biraktigimda mouseup ve sonra click tetiklenir.
// ****************************************************************************************************************************

document.querySelector('.link').addEventListener('mouseenter',tiklanma) // mouse, butonun uzerine geldiginde calisir, 
                                                                        //   basmaya gerek yok
document.querySelector('.link').addEventListener('mouseleave',tiklanma) // mouse, butonun uzerine geldikten sonra cikinca calisir.

document.querySelector('.link').addEventListener('mouseover',tiklanma) // mouse, butonun uzerine geldikten sonra cikinca calisir.
                                                                        // mouseleave'den farki alandan cikmasina gerek yok,
                                                                        // baska bir elemanin uzerine gidip gelince de calisir.

document.querySelector('.link').addEventListener('mousemove',tiklanma)  // mouse hareket ettigi surece tetiklenir.

function tiklanma(e){
    let deger 
    deger =e

    console.log(deger)
    e.preventDefault() 
}

// boyle yaptigimizda bir MouseEvent'i geldi. birsuru parametre onumuze geldi.
// deger=e.target deseydik : target, ekranda tiklanma olayinin gerceklestigi elemani gorururm.
// deger=e.target.className dersek :  sinif adini verir.(ornegin link)
// deger=e.type dersem : click doner.


// mouse hareketiyle arka plan rengi degisen bir bolum yapalim.
document.querySelector('.container').addEventListener('mousemove',arkaPlanRengiDegistir)

function arkaPlanRengiDegistir(e){
    document.querySelector('.yazi').textContent=`X: ${e.clientX} Y: ${e.clientY}`
    document.querySelector('.yazi').textContent=`R: ${e.clientX % 255} G: ${e.clientY % 255} B: ${(e.clientX +e.clientY) % 255}`
    document.querySelector('.container').style.backgroundColor = `rgb ($ {e.clientX % 255 },
     ${e.clientY % 255}, ${(e.clientX +e.clientY) % 255})`
}

 