// index.js acarak simple-is'nin kullanimina nmpjs.com'dan simple-is yazarak usage'ina bakiyoruz 

const is = require("simple-is"); // dersek bu package'i kullanmis olucaz 

// require icine herhangi bir package ismi verdigimiz zaman bu package ; node modules altinda araniyor, 
        // ve bu paket varsa dahil ediliyor.

console.log(is.number(24));
console.log(is.string(24));





