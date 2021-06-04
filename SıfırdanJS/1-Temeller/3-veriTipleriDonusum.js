let value;
console.log(value);
// Veri Tiplerini Stringe Cevirme
value=String(123);
value=String(3.14);
//ya da 
value=(10).toString();
console.log(value);
console.log(typeof value);

// Veri Tiplerini Sayilara Cevirme
value2=Number("123");
value2=Number(null); // 0 cevirir.
value2=Number(undefined); // NaN cevirir.
value2=Number("Hello World") //NaN cevirir.
console.log(value2);

value3=parseFloat("3.8"); //3.8
console.log(value3);

value4=parseInt("2.333"); // 2 
console.log(value4);

