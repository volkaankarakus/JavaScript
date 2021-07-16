class Request {  

    get(url) { // Get Request

        return new Promise((resolve,reject) => {

            fetch(url) 
            .then(response => response.json()) 
            .then(data => resolve(data))  // BURADAKI DATAYI AKTARMAK ISTIYORUM. console.log(data) yerine resolve(data) yaptik. 
            .catch(err => reject(err));   // ayni sekilde burasi da "reject".
        })
    }
    

    post(url,data){ // Post Request
        return new Promise((resolve,reject) => {

        fetch(url,{
            method:'POST',
            body : JSON.stringify(data),
            headers : {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json()) 
        .then(data => resolve(data))   
        .catch(err => reject(err))  
        })
    }


    put(url,data){ // Put Request
        // yine jsonplaceholder'dan faydalanicaz.
        // Updating a Resource kismindan 
        return new Promise((resolve,reject) => {

        fetch(url,{  // yine url ve obje yapimizi aciyoruz
            method:'PUT',
            body: JSON.stringify(data),
            headers : {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        })
    }

    delete(url){
        return new Promise((resolve,reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', { // id'si 1 olan album silinmis olucak.
                method: 'DELETE',
            })
            .then(response => resolve("Veri Silme İslemi Basarilii...")) // json'a cevirmedik zaten bos bir obje donucek.string dondurmemiz yeterli.
            .catch(err => reject(err));
        });
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