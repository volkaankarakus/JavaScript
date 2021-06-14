// elementlere event kazandirmaya calisicaz
const filterInput = document.getElementById("filter");

// filterInput.onfocus = function() {
//     console.log("Naber"); // todo arayina basildiginda f12'de naber ciktisi verdirdik.
// }

// genelde yukaridaki yontem kullanilmaz. Daha yaygin bir yontem deneyelim :
filterInput.addEventListener("focus", function(e){
    console.log("Naber");
    console.log(e); // event objesinin ozelliklerine bakmak icin yazdiralim.
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
});// once hangi event'in olustugunu soylememiz gerekiyor, sonra da bu evente gore fonksiyon yaziyoruz

/////////////////////////////////////////////////////////////////////
// benzerini todoForm icin yapalim

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit",submitForm());

function submitForm(e){
    console.log("Submit eventi"); // todo ekleyin'e bastigimizda anlik olarak cikti verip kayboldu.
                                    // form'umuzun default ozelligini yok etmemiz gerekir. 
                                    // sayfa yenileniyor, yenilenmesini istemiyoruz. bunun icin e.preventDefault() yapiyoruz
    e.preventDefault();
    
}





 