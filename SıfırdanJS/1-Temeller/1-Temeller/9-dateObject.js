let value;

const now=new Date(); // icine birsey vermedigimiz icin suanki zamani alir.

const date1=new Date("9-19-1995 06:15:03");
const date2=new Date("September 19 1995");
const date3=new Date("9/19/1995");

value=date1;
value=date1.getMonth(); // 8 doner. cunku 0'dan basladi.
value=date1.getDate(); // 19 doner. gun 1'den baslar.
value=date1.getDay(); // pazar=0'dan baslayarak 6ya kadar ilerler.
value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();

//tarih degistirme
date1.setMonth(11);
date1.setDate(14) // o ayin 14. günü demek
date1.setFullYear(1995,3,7);
date1.setHours(15,35,1); // Set the time to 15:35:01



console.log(now); // Sat Jun 05 2021 02:28:50 GMT+0300 (GMT+03:00)
console.log(value);
console.log(date1);




