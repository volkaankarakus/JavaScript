// HTML konusu olsa da buton'a ya da link'e type olarak button yazdigimizda tiklanilabilir bir hale gelir.

// KLAVYE VE FONT EVENTLERI

const myform=document.querySelector('#form')
const isim=document.querySelector('#ad')

isim.addEventListener('keydown',eventiYakala) // elini klavyeye bastiginda tetiklenir.
isim.addEventListener('keyup',eventiYakala) // elini klavyeden cektiginde tetiklenir.
isim.addEventListener('keypress',eventiYakala) // klavyeye basip cektiginde tetiklenir.

isim.addEventListener('focus',eventiYakala) // yazma metnine basildiginda tetiklenir.
isim.addEventListener('blur',eventiYakala) // yazma metninden cikildiginda tetiklenir.

isim.addEventListener('cut',eventiYakala)
isim.addEventListener('copy',eventiYakala)
isim.addEventListener('paste',eventiYakala)



myform.addEventListener('submit',eventiYakala) 

function eventiYakala(e) {
    console.log(isim.value)
    document.querySelector('.link').textContent=isim.value
    console.log('Event adi :' + e.type)
    e.preventDefault()
}