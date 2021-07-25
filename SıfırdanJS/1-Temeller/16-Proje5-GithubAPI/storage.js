class Storage {

    static getSearchedUsersFromStorage(){
        // Tum kullanicilari al 
        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;

    }

    static addSearchedUserToStorage(username){
        // Kullanici ekle
        let users = this.getSearchedUsersFromStorage(); // this, Storage class'i

        // username daha onceden var mi bunu indexOf ile kontrol edicez
          // -1 sonucu gelirse bu username, users'ta yoktur demektir 
        if(users.indexOf(username) === -1){
            users.push(username); // bu username yoksa users'a ekle. Boylece birden fazla ayni username ismi girilmemis olur
        }

        localStorage.setItem("searched",JSON.stringify(users));

    }

    static clearAllSearchedUsersFromStorage(){
        // Tum kullanicilari sil
        localStorage.removeItem("searched");
    }
    
}