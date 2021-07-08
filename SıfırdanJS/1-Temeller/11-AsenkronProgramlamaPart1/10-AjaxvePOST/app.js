// GET request sayesinde web sayfasina erisiriz ve web sayfasi bize bir HTML doner
//     veya restAPI kullanirsak genelde JSON objesi doner.

// POST request sayesinde bir tane API'ye bilgimizi gonderebiliriz.
// albums'e post request atmaya calisicaz
// post request atmak icin https://jsonplaceholder.typicode.com'da endpointler belirlenmis
//   sitede goruldugu uzere  /posts yazmamiz gerekiyormus.

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){
        
        this.xhr.open("GET",url);

        this.xhr.onload = () => {
            if(this.xhr.status==200) { 
                callback(null,this.xhr.responseText); 
            }
            else{
                callback("GET Requestte hata olustu.",null); 
            }
        };

        this.xhr.send();
    }



    post(url,data,callback){
        // baglantiyi acalim
        this.xhr.open("POST",url);

        // API'lere JSON verisi gonderebiliriz veya form verisi gonderebiliriz ancak bunu burada belirtmemiz gerekiyor( header olarak )
        this.xhr.setRequestHeader("Content-Type","application/json"); // gondermek istedigim veri tipi JSON oldugunu belirtmek zorundayim
                                                                      // form verisi nasil gonderiliyor : setRequestHeader ajax yaz w3schools'tan bak.
    
        // post request basarili bir sekilde gerceklesmisse
        this.xhr.onload = () => {
            // created status code'u 201
            if(this.xhr.status === 201){ // 201'se yeni bir kaynak olusmustur
                // Basarili
                callback(null,this.xhr.responseText); // basarili oldugu icin err = null
            }
            else{
                // Hatali 
                callback("POST Requestte hata olustu.",null) // bu sefer response = null
            }
        }

        this.xhr.send(JSON.stringify(data)); // gonderilecek JSON objesini stringe cevirmemiz gerekiyor.

    }
}

const request = new Request();

// get requesti gonderme
request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err === null){
        // Basarili
        console.log(response);
    }
    else{
        // Hatali
        console.log(err);
    }
}); 

// post requesti gonderme 
/*
{
    "userId": 10,
    "id": 100,
    "title": "enim repellat iste"
  }
                                          albumler bu sekilde. "id" ler otomatik olarak artiyor. bunu gondermeme gerek yok. diger 2 si yeterli.
*/ 

// 1. parametre : post'un url'si /post seklindeydi. album eklemeye calistigimiz icin /albums seklinde gondermemiz gerekiyor
// 2. parametre : data. datayi "userId" ve "title" a gore ekleyecektik.
// 3. parametre : callback
request.post("https://jsonplaceholder.typicode.com/albums",{userId:2, title:"Volkan"},function(err,album){
    // Basarili
    if(err === null){
        console.log(album);
    }
    else{
        // Hata
        console.log(err);
    }
});

/*
{
  "userId": 2,
  "title": "Volkan",
  "id": 101
}                                     ciktisini aldik. boylece albume veri eklemis olduk.  
*/

