 // Proje buyukse, proje icinde bircok js dosyasi olabilir ve bu dosyalar surekli birbirlerini kullanabilir.
// JS dosyalarinin birbirini kullanmasi MODUL dedigimiz yapiyi ortaya cikariyor.

// bir JS dosyasini export diyerek disariya aktarabiliyoruz ve import diyerek kullanabiliyoruz 

// 100 tane JS dosyamiz olsun ve bunlar birbirini kullaniyor.
// WEBPACK kullanirsak : sadece 1 tane dosyamiz olucak, tum dosyalari 1 dosyaya import ve export eder. Bunu da index.html'e baglayinca
   //  webpack burada performansi arttirarak daha hizli yukleme ve kullanma olanagi sunar.
   
   
// WEBPACK VE BABEL BERABER KULLANIMI
// Babel icin gereken modulleri projeye dahil edicez, babella webpack arasinda iliski kurmak icin "babel-loader" diye bir modul indirmemiz gerekiyor.
// webpack bu modulu kullanarak babel'i kendi icinde kullanicak.

