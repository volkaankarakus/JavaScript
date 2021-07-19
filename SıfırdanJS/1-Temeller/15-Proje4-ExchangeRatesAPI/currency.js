// ES6 ile yazmaya calisicaz, Promise yapisi

class Currency {
    constructor(firstCurrency, secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;

        this.url = "http://api.exchangeratesapi.io/v1/latest?access_key=af8341a3a0824bfa6f42e4ee1bcd0db7&base=";

        // veri alisverisi icin amount'u burada olusturalim. Her event olustugunda degisiceginden ilk olarak null girelim
        this.amount = null ;
    }

    exchange(){
        return new Promise((resolve, reject) =>{
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];
                const amount2 = Number(this.amount);

                let total = parity * amount2;
                resolve(total);
            })
            .catch(err => reject(err));

        })

        

    }

    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}