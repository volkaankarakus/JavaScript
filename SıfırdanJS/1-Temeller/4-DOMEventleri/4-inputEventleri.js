const  filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",load);

function load(e){
    console.log("Sayfa yüklendi.");
}

// focus
filter.addEventListener("focus",run);

// blur (focustan ciktigimizda tetiklenir)
filter.addEventListener("blur",run);

// paste (inputa herhangi birsey yapistirildiginda tetiklenir)
filter.addEventListener("paste",run);

// copy (input alanindaki bolumde herhangi birsey kopyalanirsa tetiklenir)
filter.addEventListener("copy",run);

// cut
filter.addEventListener("cut",run);

// select (inputta bir yazi butunu secince)
filter.addEventListener("select",run);

function run(e){
    console.log(e.type); 
}

