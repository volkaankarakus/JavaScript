const yeniGorev=document.querySelector('.input-gorev');
const yeniGorevEkleBtn=document.querySelector('.btn-gorev-ekle');
const gorevListesi=document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click',gorevEkle);
gorevListesi.addEventListener('click',gorevSilTamamla);

function gorevSilTamamla(e){
    const tiklanilanEleman=e.target;

    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){ // ise tik butonunu secmistir.
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi'); //buton tiklandiginda
                                                                             // parent'a git (yani Div) yoksa ekle, varsa sil gorevi gorur toogle.
    }

    if(tiklanilanEleman.classList.contains('gorev-btn-sil')){ // ise sil butonunu secmistir.
        tiklanilanEleman.parentElement.classList.toggle('kaybol') // animasyonlu kaybolmasi icin yaptik. kaybol, css icinde

        tiklanilanEleman.parentElement.addEventListener('transitionend',function () {
            tiklanilanEleman.parentElement.remove()
        })
    }
}



function gorevEkle(e){
    e.preventDefault();
    
    // div olusturma
    const gorevDiv=document.createElement('div'); // olusturucagim elementin adi div
    gorevDiv.classList.add('gorev-item'); // olusturulan div'in bir de class tanimlari var. 

    //li olusturma
    const gorevLi=document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText=yeniGorev.value; // kullanicinin girdigi yeniGorevden deger alicak
    gorevDiv.appendChild(gorevLi); // bu gorevLi'yi ust kisim olan gorevDiv'e de eklememiz gerekiyor.

    //tamamlandi butonu ekleme
    const gorevTamamBtn=document.createElement('button');
    gorevTamamBtn.classList.add('gorev-btn');
    gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
    gorevTamamBtn.innerHTML='<i class="fas fa-check"></i> ';
    gorevDiv.appendChild(gorevTamamBtn); //li'ye degil div'e eklicez.

    //tamamlandi butonu ekleme
    const gorevSilBtn=document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('gorev-btn-sil');
    gorevSilBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    gorevDiv.appendChild(gorevSilBtn);

    yeniGorev.value='';// eklenme anindan sonra yeniGorev'i bosalt.(Input girilecek yerin resetlenmesi)

    // ul'ye olusturdugumuz div'i ekleyelim(ekrana cikmasi icin)
    gorevListesi.appendChild(gorevDiv);
}

// html dosyasinda 40. satirdan 62. satira kadar silmemiz gerekiyor artık.
//  Ama ogretici olmasi icin kalsin.