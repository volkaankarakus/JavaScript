// Element Secme 
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");

const clearLastUsers = document.getElementById("clear-last-users");

// son aramalar icin ul
const lastUsers  = document.getElementById("last-users");

eventListeners();

function eventListeners () {
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched); // son aramalari sayfa yenilendikce storage'dan alip arayuze yazicaz.
}

function getData(e){





    
    e.preventDefault()
}

function clearAllSearched(){
    // Tum Arananlari Temizle

}

function getAllSearched(){
    // Arananlari Storage'dan al ve UI'a ekle


}