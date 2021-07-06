// calisanlari getir'e once bir click eventi atayacagiz
document.getElementById("ajax").addEventListener("click",getAllEmployees);


function getAllEmployees(){

    //obje olusturma
    const xhr = new XMLHttpRequest();

    //baglanti kurma 
    xhr.open("GET","employees.json",true);


    // istegi gondermeden sonra, kod olarak oncesine load'u yaziyoruz
    xhr.onload = function(){

        //employees'i alalim
        let list = document.getElementById("employees");


        if(this.status == 200){
            console.log(this.responseText); // json dosyasindaki butun veriler geldi.
            console.log(typeof this.responseText); // string dondu.

            //JSON array'e cevirmek icin
            console.log(JSON.parse(this.responseText)); //suan veriler 3 indexli bir array icinde.
            // bunlari tutmak icin de degisken tanimlayabiliriz
            const employees = JSON.parse(this.responseText);

            //simdi bu array'in icinde forEach ile gezinebiliriz
            employees.forEach(function(emp){
                // HTML'de tr icinde td'ler seklinde table'a veriler ekleyebiliyorduk
                list.innerHTML += ` 
                <tr>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                    <td>${emp.salary}</td>
                </tr>
                `
            });
        }
    }

    //istegi gonderme 
    xhr.send() // "get" request oldugu icin icine birsey vermiyoruz

}
