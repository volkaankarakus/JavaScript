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
        
        this.xhr.open("POST",url);

        this.xhr.setRequestHeader("Content-Type","application/json"); 

        this.xhr.onload = () => {
            
            if(this.xhr.status === 201){ 
                // Basarili
                callback(null,this.xhr.responseText); 
            }
            else{
                // Hatali 
                callback("POST Requestte hata olustu.",null) 
            }
        }

        this.xhr.send(JSON.stringify(data)); 
    }



    // put request bir veriyi update etmemizi saglar.
    // https://jsonplaceholder.typicode.com'da put degistirimi id'si 1 olan veriyi degistirmek icin /posts/1 olarak verilmis.
    put(url,data,callback){
        
        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-Type","application/json"); 

        // PUT'un onload'unda 200 kodu gelir.
        this.xhr.onload = () => {
            
            if(this.xhr.status === 200){ 
                // Basarili
                callback(null,this.xhr.responseText); 
            }
            else{
                // Hatali 
                callback("PUT Requestte hata olustu.",null) 
            }
        }
        this.xhr.send(JSON.stringify(data)); 
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

// put request gonderme
// id'si 10 olan albumu degistirelim
request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:500, title:"Ali"},function(err,album){
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
  "userId": 500,
  "title": "Ali",
  "id": 10
}                         ciktisini aldik.

*/
