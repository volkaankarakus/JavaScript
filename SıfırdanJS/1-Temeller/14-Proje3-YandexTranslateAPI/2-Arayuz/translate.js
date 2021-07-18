function Translate(word,language){
    this.apikey = "trnsl.1.1.20210717T145211Z.412cef4e676d5298.fbfd5216f1c9ae42b554176550c62ca0d84b33d0" ;
    this.word = word;
    this.language = language;

    // XHR Object
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){  // bunu arrow function olarak yazsaydik, hataya dusecektik
    // Ajax Islemleri
    const endpoint =`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    // Ajax ile baglanti acma 
    this.xhr.open("GET",endpoint,true); // true : asenkron

    this.xhr.onload = () => {

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
};

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}