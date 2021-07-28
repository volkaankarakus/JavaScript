// CommonJs Modulleri (require syntax'i)
const app = require("./module1");

console.log(app);
app.test1();
app.test2();
console.log(app.name);
app.test3();
console.log(app.person.name);  

/////////////////////////////////////////////////////
// ES6 ile yazilmis modulu ES6 ile import etme
//    exportlu tanimladigimiz degiskenler obje olarak dis dunyaya aktariliyor. O yuzden :
import { test4,Person2,employee } from "./module1";

// module1.js'deki herseyi almak istiyorsam :
//    import * as module1 from "./module1";
//    module1.employee.salary ; (bu da kullanimi)
Person2.Test5();

test4();

console.log(employee.salary);




