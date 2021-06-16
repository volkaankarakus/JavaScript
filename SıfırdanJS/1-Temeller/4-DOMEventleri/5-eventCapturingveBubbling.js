// Event Bubbling (asagidaki eventin yukarilari etkilemesi)

// ilk basta container'i secelim ve buna click eventi atayalim
// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div container");  
// });

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");  
// });

// document.querySelector(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");  
// });

///////////////////////////////////////////////////////////////////////////////////////
// Event Capturing ya da Delegation
const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click", run);

function run(e){
    console.log(e.target);

    if(e.target.className ==="fa fa-remove"){
        console.log("Silme Islemi");
    }

    if(e.target.id ==="filter"){
        console.log("Filtreleme Islemi");
    }

    if(e.target.id ==="clear-todos"){
        console.log("Tum tasklari silme islemi");
    }
}
