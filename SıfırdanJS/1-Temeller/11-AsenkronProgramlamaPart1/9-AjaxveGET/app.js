// browser'a "jsonplaceholder" diye arat.
// burada fake online restAPI'ler var.

// sitede gozuktugu gibi routes'ta GET /post yaparsak tum postlari alabiliyoruz.
// GET /album yaparsak da 100 tane album datasi cekmis oluyoruz.

// Ajax, callback, http requests

class Request{
    constructor(){
        // obje olusturma
        this.xhr = new XMLHttpRequest();

    }

    // Get Request
    get(url){
        // baglantiyi acalim
        this.xhr.open("GET",url);

        // 27. satirdaki hatayi engellemek icin temp tanimlama
        const temp = this;

        // response basarili bir sekilde gelirse
        this.xhr.onload = function(){

            console.log(this); // this.xhr : XMLHttpRequest'i gosteriyor, yani buradaki xhr'i gosteriyor. 
                                  // this.xhr yaptigimizda xhr uzerinden xhr'a ulasmaya calisiyoruz, yani hata aliyoruz.
                                  // eger this'imiz Request'i gosterseydi dogru olucakti. bunu cozmenin birden cok yolu var.
                                  // en ilkel olani "const temp = this" tanimlamak.

            if(temp.xhr.status==200) { // bilgi sikintisiz gelmisse
                console.log(temp.xhr.responseText);
            }
        }

        // istek gonderme 
        this.xhr.send();
    }
}

// requestten obje olusturma 
const request = new Request();

// url gonderelim
const albums = request.get("https://jsonplaceholder.typicode.com/albums");
// albums'u yazdirmak icin console.log yaparsak undefined veriyor( asenkron oldugu icin )
// bunu yazdirmak icin ek ozellikler katicaz.(callback) 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11 
// !!!!!!!!!!!!!!!!! app2.js'de !!!!!!!!!!!!! EN GUZEL VE CALISIR HALI. 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
2.YONTEM
temp tanimlamadan this zaten xhr'i gosterdigi icin:  this.xhr.status yerine this.status diyebilirdik.
                                                     ayni sekilde this.xhr.responseText yerine this.responseText diyebilirdik.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
3. YONTEM
get'in sonuna bind yaparsak : get, Request'in bir fonksiyonu oldugu icin "bind" ile artik "this" Requesti gosterir :
get(url){
        
        this.xhr.open("GET",url);

        this.xhr.onload = function(){

            console.log(this); 

            if(this.xhr.status==200) { 
                console.log(this.xhr.responseText);
            }
        }.bind(this);                       !!!!!!!!! bu satira bind ekledik.

        this.xhr.send();
    }
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4. YONTEM
biz bunu arrow function olarak yazarsak : zaten arrow function bind islemini kendisi gerceklestiriyor.
get(url){
        
        this.xhr.open("GET",url);

        this.xhr.onload = () => {
            if(this.xhr.status==200) { 
                console.log(this.xhr.responseText);
            }
        }

        this.xhr.send();
    }
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

