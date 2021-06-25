// Static Methods

class Matematik {

    cube(x){
        console.log(x*x*x);
    }
}

const math = new Matematik();
math.cube(3); // 27

// Obje olusturmadan fonksiyon kullanmak istiyor olabiliriz
//   belli fonksiyonlari belli classlar icine statik method seklinde yazarsak 
//           obje olusturmadan kullanabiliriz.

// yukaridaki ornekte cube fonksiyonunu kullanmak icin obje olusturmam sart.
//   obje olusturmadan kullanmak icin - static 

class Mat2 {
    static newCube(x){
        console.log(x*x*x);
    }
    square(x){
        console.log(x*x);
    }
}

Mat2.newCube(5); // obje olusturmadan sonuc 125

// static methodlar objenin prototype'ine yazilmadigi icin
// const newObje = new Mat2();
// newObje.newCube(5); hata verir, sadece sinif uzerinden erisebiliyoruz

// square static olmadigi icin nesne uzerinden erisilebilir
const obj = new Mat2();
obj.square(5); // nesne olusturup bunun uzerinden eristik.
// square static olmadigi icin bunu da class uzerinden kullanamayiz
// Mat2.square(7) hata verir.

