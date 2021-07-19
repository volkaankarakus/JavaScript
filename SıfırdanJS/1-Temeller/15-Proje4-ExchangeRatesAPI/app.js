// Elementleri Secme
//   Miktar ve 2 selectlist
const amountElement = document.querySelector("#amount"); 
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

const currency = new Currency("USD","TRY"); // default hali

const ui = new UI(firstSelect,secondSelect);

// iki selectListe de ayri ayri onchange eventi atamak istiyoruz
// ilki degisince 2. karttaki basligin ilk kismi, ikinci icin ikinci kismi. (USD-TRY)

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input", exchangeCurrency);

    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();

    }

    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    }
}

function exchangeCurrency(){
    console.log("Event Olustu...");

    currency.changeAmount(amountElement.value);


    currency.exchange() // json objemizi aliyoruz.
    .then(result => 
        ui.displayResult(result))
    .catch(err => console.error(err));
}