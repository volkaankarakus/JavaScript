class Request {  

    // constructor olmicak cunku objeye ihtiyacimiz yok. direkt olarak window'un fetch'ini kullanicaz

    get(url) { // Get Request

        fetch(url) // bu url'ye gore bize bir JSON verisi donucek ve bunu da then ile yakalicaz
        .then(response => response.json()) // .text() de alabilirdik ama degisiklik yapmak icin .json() almak daha iyi.
        .then(data => console.log(data))
        .catch(err => console.error(err));

    }

    
}

// albums'u fetchle almaya calisalim
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums"); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// verileri sadece get() fonksiyonu icinde yazdirabiliyoruz. Veriyi direkt elde etmek icin 
//      ekrana yazmasin, promise objesi donsun.

class Request2 {  

    get(url) { // Get Request

        return new Promise((resolve,reject) => {

            fetch(url) 
            .then(response => response.json()) 
            .then(data => resolve(data))  // BURADAKI DATAYI AKTARMAK ISTIYORUM. console.log(data) yerine resolve(data) yaptik. 
            .catch(err => reject(err));   // ayni sekilde burasi da "reject".
        })
    }    
}

const request2 = new Request2();

let albums;

request2.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err => console.error(err)); 

// simdi 
//    console.log(albums); dersek "then" asenkron calistigi icin ilk basta bu satirdaki console.log() calisir, daha sonra 42. satir calisir
//    veri henuz gelmedigi icin console.log() sonucu "undefined" olur. o yuzden albums'u aldiktan hemen sonra yani 45. satirda yaziyoruz.
