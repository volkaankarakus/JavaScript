// kullanicagimiz api ucretsiz bir api : exchangeratesapi.io

// ilk basta butonu secip buna "get" request atmaya calisicaz
// buton id'si : "change"

document.getElementById("change").addEventListener("click",change);

function change(){

    // xhr objesi olusturma
    const xhr = new XMLHttpRequest();

    // baglantiyi acma 
    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=5c11cc4a818777f52b5fa8d5c24b5d03"); // kendisi zaten asenkron oldugu icin ,true yapmadik.

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            console.log(response); // rates icinde TRY'yi bulursam 1 Euro'nun karsiligini bulmus oluyorum.

            // TRY'ye kadar gidelim ve bu stringi number'a cevirelim
            const rate = Number(response.rates.TRY);
            
            //amount'da HTML'de id'si "amount" olan kisima girilen input 
            const amount = Number(document.getElementById("amount").value);

           // sonucu ekrana yazdirma 
           document.getElementById("tl").value = amount * rate;         
        }
    }


    // request gonderme 
    xhr.send() // "get" request oldugu icin icine birsey vermedik. 
    


}


