// butonlari ve formu secelim (Element Secme)
const githubForm = document.getElementById('github-form');
const nameInput = document.getElementById('githubname');
const clearLastUsers = document.getElementById('clear-last-users');

const lastUsers = document.getElementById('last-users');


const github = new Github(); 

const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener('submit',getData);
    clearLastUsers.addEventListener('click',clearAllSearched);
    document.addEventListener('DOMContentLoaded',getAllSearched); // son aramalari sayfa yenilendikce storagedan alip arayuze yazma 

}


function getData (e){
    let username = nameInput.value.trim();

    if( username === ""){
        alert("Lutfen gecerli bir kullanici adi giriniz...");
    }
    else{
        // request aticaz
          // request atmak icin Github'dan obje olusturmamiz gerekiyor. yukarida olusturduk
        github.getGithubData(username) // fonksiyon async olarak yazildigi icin ve burada bize obje donucegi icin bizim bunu Promise yapisiyla yakalamamiz gerekiyor
        .then(response => {
            if(response.user.message === "Not Found"){
                // Hata Mesaji 
                ui.showError("Kullanici bulunamadi.");
            }
            else{
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user); 
                ui.showRepoInfo(response.repo);

            }
        })
        .catch(err => ui.showError(err));
    
    }

    
    
    ui.clearInput();  // Input Temizleme 
    e.preventDefault();
}



function clearAllSearched(){
    // Tum arananlari temizle 
    if(confirm("Emin misiniz?")){
        Storage.clearAllSearchedUsersFromStorage(); // Storage'dan temizleme
        ui.clearAllSearchedFromUI();

    }
}

function getAllSearched(){
    // Arananlari storagedan UI'a ekle
    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach( user => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        result += `<li class="list-group-item"> ${user}</li>`;

    });

    lastUsers.innerHTML = result ;

}
