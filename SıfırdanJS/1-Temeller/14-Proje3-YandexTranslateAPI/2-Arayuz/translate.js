function Translate(word,language){ // Translate Objesi
    this.apikey = "trnsl.1.1.20210717T145211Z.412cef4e676d5298.fbfd5216f1c9ae42b554176550c62ca0d84b33d0" ;
    this.word = word;
    this.language = language;

    // XHR Object
    this.xhr = new XMLHttpRequest();
}


// callback sayesinde bunu app.js'deki translateWord'te yakalamaya calisicaz.
Translate.prototype.translateWord = function(callback){  // bunu arrow function olarak yazsaydik, hataya dusecektik
    // Ajax Islemleri
    const endpoint =`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    // Ajax ile baglanti acma 
    this.xhr.open("GET",endpoint,true); // true : asenkron

    this.xhr.onload = () => {  // arrow functionsiz bir sekilde yazsaydik "this.xhr"daki this zaten xhr'i gosteriyor. xhr.xhr gibi birsey olurdu.
                                    // arrow function ile this artik Translate objesini gosteriyor.

        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            
            const text = json.text[0];

            callback(null,text);

        }
        else{
            callback("Bir Hata Olustu..",null);
        }
    }

    this.xhr.send();
    // send ile request gonderiyoruz, eger response donerse bunu "onload" da yakaliyoruz.
};


// Nasılsından Merhabaya gecerken translate.js'nin icindeki Translate objesindeki word degismiyor. Nasilsinsa hep Nasilsin olarak kaliyor.
// kullancici word ve language'i degistirdiginde bu parametrelerin de degismesi gerekiyor.
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}
