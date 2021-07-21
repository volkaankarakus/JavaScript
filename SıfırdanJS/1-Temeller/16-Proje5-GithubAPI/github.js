class Github{

    constructor(){
        this.url = "https://api.github.com/users/";
    }

    async getGithubData (username){
        // buraya gelecek username'i app.js'de vericez.(nameInputtan) bunu aldiktan sonra da Promise seklinde donucek
        const responseUser = await fetch(this.url + username);
        

    }

}