// fetchAPI, AJAX yerine kullabildigimiz alternatif asenkron veri alma-gonderme API'si.

//fetchte de promise yapisi vardir.
// fetch'te de olumlu donus : "resolve" . Bunu "then" ile yakalayabiliyoruz
//             olumsuz donus : "reject".  Bunu "catch" ile yakalayabiliyoruz
///////////////////////////////////////////////////////////////////////////////////////////
function getTextFile(){ // TEXT DOSYASI

    console.log(this); // window objesini gosterir.
                         // bunun icinde fetch seklinde bir fonksiyon oldugunu gorebiliyoruz.

    fetch("example.txt")
    .then(response => response.text()) // return response.text aslinda. then'in icinde return dondurdugumuz icin yine bize bir promise olarak gelicek
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

getTextFile(); // Burasi bir text dosyasidir.

///////////////////////////////////////////////////////////////////////////////////////////
function getJSONFile(){ // Local bir JSON dosyasindan veri alma
    
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

getJSONFile();
/*
(3) [{…}, {…}, {…}]
0: {name: "Volkan", age: 26, salary: 5000}
1: {name: "Ali", age: 32, salary: 10000}
2: {name: "Veli", age: 40, salary: 15000}
*/
///////////////////////////////////////////////////////////////////////////////////////////
function getExternalAPI(){
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=5c11cc4a818777f52b5fa8d5c24b5d03")
    .then(response => response.json())
    .then(data => console.log("Guncel Kur : ",data.rates.TRY))
    .catch(err => console.error(err));
}

getExternalAPI(); // Guncel Kur :  10.270431

