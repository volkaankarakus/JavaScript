const person = {
    age:25,
    tellAge : function(){
        console.log(this.age);
    }
}

person.tellAge(); // 25 . buradaki this -> person

///////////////////////////////////////////////////////////////////
const person2 = {
    age:25,
    tellAge2 : function(){
        console.log(this.age);
    }.bind(this)
}

person2.tellAge2(); // undefined. cunku this -> window (bind sayesinde)
// bunu yapmamizin sebebi sonraki bolumlerde GET-POST-PUT-DELETE icin


