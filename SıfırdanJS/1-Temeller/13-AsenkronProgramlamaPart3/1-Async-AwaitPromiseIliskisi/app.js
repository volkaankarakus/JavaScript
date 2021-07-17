// ES7 ile beraber gelen async ve await ogrenicez.
// ES6'daki promise'leri daha efektif bir sekilde kullanabilmek icin bu 2 anahtar kelime konulmus.

// javascript.info web sitesinde cok guzel anlatmis, buraya bakabilirsin


// ASYNC
async function test(data) {  // Basindaki async anahtar kelimesi : bunun mutlaka bir Promise donucegini soyluyor.(return new Promise)
    return data;
}
// yani fonksiyonun basina "async" yazarsak return'daki data'yi alir, Promise olarak dondurur.
// Biz yukarida Promise dondurmedigimiz icin JavaScript bunu aldi ve Promise seklinde dondurdu.

test("Merhaba").
then(response => console.log(response)); // Merhaba

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// AWAIT
//  Bir Promise'in resolve etmesini bekleyen anahtar kelime.
async function test2(data) {
    let promise = new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve('Bu bir degerdir..');
        },5000);
    });

    let response = await promise; // promise objemiz 5 saniye sonra resolve edicek. yani BU SATIR 5 SANIYE BEKLEYECEK.
        // AWAIT : sadece async fonksiyonlar icinde calisir !!!!
    
    return response; // async fonksiyonlar mutlaka promise donmek zorundaydi. bu response'u da Promise icine atar.
                        // bu fonksiyonu cagirip 'then' ile yakalicaz.
    
}

test2('Async')
.then(response => console.log(response)); // Bu bir degerdir..

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function testData(data) {
    let promise = new Promise((resolve,reject) => {

        setTimeout( () => {
            if(typeof data ==="string"){
                resolve(data);
            }
            else{
                reject(new Error("Lutfen bir string deger giriniz.."));
            }
        },5000);
    });

    const response = await promise;

    return response ;
}

testData(24)
.then(data => console.log(data))
.catch(err => console.error(err)); // Lutfen bir string deger giriniz..

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fetch bize promise donduruyor, biz bunu yine await ile bekleyebiliriz
async function getCurrency(url){
    const response = await fetch(url); // fetch(url) aslinda Promise dondurdugu icin, resolve ettigi zaman bize Response Objesini dondugu icin 
                                            // buradaki 'response' , aslinda Response Objesi.

    // bu response objesinde eger bize 'json' geliyorsa biz bunu response.json() olarak cevirebiliyorduk
    // response.json() yine bir Promise dondugu icin biz bunu yine 'await' ile bekleyebiliriz.
    const data = await response.json(); // JSON objemiz oldu. 

    return data;
}

getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=5c11cc4a818777f52b5fa8d5c24b5d03")
.then(response => console.log(response));