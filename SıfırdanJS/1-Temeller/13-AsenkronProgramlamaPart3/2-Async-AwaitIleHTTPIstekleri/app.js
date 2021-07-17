class Request {  

    async get(url) { // Get Request

        const response = await fetch(url); // Response Objesi olusturma
        const responsedata = await response.json(); // Response uzerinden json ile Promise donduruyoruz. ve bunu await ile bekletiyoruz.
                                            // await response.json(); 'resolve' ettiginde bu sefer data : JSON OBJESI haline geldi.
        return responsedata;
    }
    

    async post(url,data){ // Post Request
        
        const response = await fetch(url,{ // yine Promise donucegi icin bunu await'le bekleyelim.
                method:'POST',
                body : JSON.stringify(data),
                headers : {
                    'Content-type': 'application/json; charset=UTF-8'
            }
        }); // Response Object

        const responsedata = await response.json();

        return responsedata;
    }


    async put(url,data){ // Put Request
        
        const response = await fetch(url,{ 
            method:'PUT',
            body: JSON.stringify(data),
            headers : {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }); // Response Object

        const responsedata = await response.json();

        return responsedata;
    }

    async delete(url){
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', { 
                    method: 'DELETE',
                });
        
        return "Veri Silme İslemi Basarili...";
    }


}

const request = new Request();

// GET
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err => console.error(err)); 

// POST
request.post("https://jsonplaceholder.typicode.com/albums",{userId : 1, title : "Thriller"})
.then(newAlbum => console.log(newAlbum))  // yakalamak icin
.catch(err => console.log(err));

// PUT
// albums'un id'si 1 olani degistirmek istiyoruz diyelim
request.put("https://jsonplaceholder.typicode.com/albums/1",{userId : 10, title : "Updated Title"})
.then(data => console.log(data))
.catch(err => console.log(err));

// DELETE
request.delete("https://jsonplaceholder.typicode.com/albums/5")
.then(message => console.log(message))
.catch(err => console.log(err));
/*
Veri Silme İslemi Basarilii...
{userId: 10, title: "Updated Title", id: 1}id: 1title: "Updated Title"userId: 10__proto__: Object
*/