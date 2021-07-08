class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){
        
        this.xhr.open("GET",url);

        this.xhr.onload = () => {
 
            if(this.xhr.status==200) { 
                callback(null,this.xhr.responseText); // istegimiz bitti. bunu callback fonksiyonuna gonderiyoruz.
            }

            // hatali gelmisse status==200 degilse ;
            else{
                // hata durumunda callback'e bir tane hata mesaji gonderebiliriz
                // o yuzden callback'i 2 parametre alacak sekilde yazicaz.
                // if'teki durum hatasiz oldugu icin buna "null" gondericez.(hata yok anlaminda)
                callback("Hata olustu.",null); // hatada donen deger olmadigi icin responseText'i "null"
            }
        };

        this.xhr.send();
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err === null){
        // Basarili
        console.log(response);
    }
    else{
        // Hatali
        console.log(err);
    }
});  // bu sekilde callback sayesinde islemi senkron bir hale getirmis olduk. requestten deger geldiginde yazdirmis olduk.
