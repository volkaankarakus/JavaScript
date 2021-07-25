class Github {


    constructor(){
        this.url = 'https://api.github.com/users/' ;
    }


    async getGithubData(username){
        // app.js'deki name-inputtan bunu alip buraya vericez. Promise seklinde buraya donucek 
        // url'ye /'tan sonra username ismi eklememiz gerekiyor.  https://api.github.com/users/volkaankarakus gibi
        // sonra bu JSON'i almamiz gerekiyor 

        const responseUser = await fetch(this.url + username ); // Bu promise'i get request atarak bekliyoruz. Buradan Response objesi donucek.
                                                                  //  resolve ettiginde response objemiz responseUser'da olucak
         
        // simdi repos'a istek atalim 
        const responseRepo = await fetch(this.url + username + '/repos'); 

        // response objesinden verileri response.json() seklinde aliyorduk ve bu da Promise donduruyordu.
           // promise dondurdugu icin burada beklememiz gerekiyor 
        const userData = await responseUser.json(); // promise donucegi icin await'le bekledik, resolve ettiginde de userData ile almis olucaz.
        const repoData = await responseRepo.json(); 
        
        // userData ve repoData'yi app.js'de kullanicaz  o yuzden bunlari return'le donmemiz gerekiyor.

        return {
            user : userData, 
            repo : repoData   // obje seklinde donerek, key kullandik.
        }


         
    }

}
