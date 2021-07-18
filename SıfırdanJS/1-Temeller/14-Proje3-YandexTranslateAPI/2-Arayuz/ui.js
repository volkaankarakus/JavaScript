function UI() {
    // HTML'deki outputImage, outputLanguage, outputWord'u burada degistiricez.
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language"); // selectlist'i de alalim.
}

// onchange() eventi olustugu zaman bunun icindeki "Almanca" textini ve icindeki herhangi bir degeri(en,es,de) alarak arayuzu degistirmeye calisalim
UI.prototype.changeUI = function() {
    // Arayuz Degistir
    // img src="images/en.png" de dinamik bir sekilde degistirmemiz gerekiyor.
    this.outputImage.src = `images/${this.languageList.value}.png`;
    // image'lari aldik. Peki textleri nasil alicaz ? 

    console.log(this.languageList.options) // bu zaten array doner. 0. option İngilizce,1 : Almanca , 2: İspanyolca. 
                                                     //Peki hangisinin secildigini nereden anlayacagiz
                                                    /*
                                                     <div class="input-field col s8">
                                                        <select id = "language">
                                                        
                                                        <option value="en">İngilizce</option>
                                                        <option value="de">Almanca</option>
                                        
                                                        <option value="es">İspanyolca</option>
                                                        </select>
                                                     
                                                    </div>
                                                    */
    console.log(this.languageList.selectedIndex); // Almancaya bastim ve console'dan 1 ciktisini aldim.

    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent; // bayrak resminin yanindaki text'i de boylece degistirdik.

}

// Cevrilen Kelime kismini dinamiklestirelim
UI.prototype.displayTranslate = function(word) {
    this.outputWord.textContent = word;
}