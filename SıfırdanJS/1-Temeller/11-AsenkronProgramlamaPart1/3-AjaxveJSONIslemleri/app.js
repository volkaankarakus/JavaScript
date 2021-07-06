// calisanlari getir'e once bir click eventi atayacagiz
document.getElementById("ajax").addEventListener("click",getAllEmployees);


function getAllEmployees(){

    //obje olusturma
    const xhr = new XMLHttpRequest();

    //baglanti kurma 
    xhr.open("GET","employees.json",true);

    //istegi gonderme 
    xhr.send() // "get" request oldugu icin icine birsey vermiyoruz
}