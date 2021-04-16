let benimYasim=30, onunYasi=25

if( benimYasim<onunYasi) {
    log.console('ben senden kucugum.')
}

else if(benimYasim==onunYasi) {
    console.log('Yaslarimiz esit.')
}

else {
    console.log('ben senden buyugum.')
}


//TERNARY IF (IF'in kisa kullanimi)
let a=10,b=5,c=0
if(a>b){
    c=a+b
}
else{
    c=a-b
}
console.log(`c degeri ${c}`)

//yukaridaki kodu TERNARY IF ile yazalim :
c=(a<b) ? (a+b) : (a-b)
console.log('c yeni deger : '+c)
