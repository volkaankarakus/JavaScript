function merhaba(name,age){
    if(typeof name==="undefined") name="İsim Bilgisi Girilmedi.";
    if(typeof age==="undefined") age="Yas Bilgisi Girilmedi";
    
    console.log(`İsim :${name}\nYas:${age}`);
}
merhaba("Volkan",26);


// Bunu boyle uzun yazmak yerine söyle yazabiliriz
function merhaba2(name="İsim Bilgisi Girilmedi",age="Yas Bilgisi Girilmedi"){
    return (`İsim :${name}\nYas:${age}`); // return kullanmamizin sebebi bu fonksiyonu baska bir yerde daha kullanabilmek, deger donmesini saglamak
}

console.log(merhaba2("volkan"));

// Immediately Invoked Function Expression (IIFE)
(function(name){
    console.log("Merhaba: " + name);
})("Murat");

/////////////////////////////////////////////////////////////////
const database = {
    host : "localhost",
    add : function() {
        console.log("Eklendi.");
    },
    get : function() {
        console.log("Elde edildi.");
    },
    update : function(id) {
        console.log(`ID:${id} güncellendi.`);
    },
    delete : function(id) {
        console.log(`ID:${id} silindi.`);
    }
}

console.log(database.host);
database.add();
database.delete(10);
