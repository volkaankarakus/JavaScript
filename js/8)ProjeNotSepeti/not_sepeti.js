const yeniGorev=document.querySelector('.input-gorev');
const yeniGorevEkleBtn=document.querySelector('.btn-gorev-ekle');
const gorevListesi=document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click',gorevEkle);
gorevListesi.addEventListener('click',gorevSilTamamla);

document.addEventListener('DOMContentLoaded', localStorageOku) // butun dokumana bir addEventListener veriyorum. Var olan butun DOM yapisi yuklendikten sonra
                                                // bunu cagir,

function gorevSilTamamla(e){
    const tiklanilanEleman=e.target;

    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){ // ise tik butonunu secmistir.
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi'); //buton tiklandiginda
                                                                             // parent'a git (yani Div) yoksa ekle, varsa sil gorevi gorur toogle.
    }

    if(tiklanilanEleman.classList.contains('gorev-btn-sil')){ // ise sil butonunu secmistir.

        if(confirm('Emin misiniz ?')){
            tiklanilanEleman.parentElement.classList.toggle('kaybol') // animasyonlu kaybolmasi icin yaptik. kaybol, css icinde

            const silinecekGorev=tiklanilanEleman.parentElement.children[0].innerText;
            localStorageSil(silinecekGorev);
    
            tiklanilanEleman.parentElement.addEventListener('transitionend',function () {
                tiklanilanEleman.parentElement.remove()

        }

        )
    }
}

function gorevEkle(e){
    e.preventDefault();
    
    if(yeniGorev.value.length >0){
        gorevItemOlustur(yeniGorev.value); // deger olarak yeniGorev'in degerini yollicam.

    // localStorage'a kaydet.
    localStorageKaydet(yeniGorev.value);
    yeniGorev.value='';// eklenme anindan sonra yeniGorev'i bosalt.(Input girilecek yerin resetlenmesi)
    }
   
    else{
        alert('Lutfenbos olmayan gorev notu giriniz.')
    }
}


function localStorageiArrayeDonustur(){
    let gorevler;

    // once localStorage'imda boyle bir yapi var mi, ona bakiyoruz.
    if(localStorage.getItem('gorevler')===null){ // .getItem() boyle bir yapi var mi ona bakiyor.
        gorevler=[];
    }
    else{
        gorevler=JSON.parse(localStorage.getItem('gorevler')) //JSON formatinda aldigimiz degerleri, icindeki verileri okuyarak array'a donustur.
    }

    return gorevler;
}
// html dosyasinda 40. satirdan 62. satira kadar silmemiz gerekiyor artık.
//  Ama ogretici olmasi icin kalsin.

function localStorageKaydet(yeniGorev){  //yeniGorev'i yollicam ki degeri localStorage'a kaydetsin
    
    localStorageiArrayeDonustur();

    gorevler.push(yeniGorev); // bu gorevi yeniGorev'e kaydettik.
    localStorage.setItem('gorevler',JSON.stringify(gorevler)); // dizinin yeni halini ekledik.   ???????????????????????????????????

}

// web sayfasi yeni acildiginda localStorage'da bir gorev varsa bunu okuyup gostermesi gerekiyor.(yani daha onceki gorevleri hatirlasin)

function localStorageOku(){
    localStorageiArrayeDonustur();
}

function gorevItemOlustur(gorev){ // div olusturmayi buraya aldik, cunku farkli farkli yerlerde kullaniyoruz, birdaha birdaha yazmayalim.
    // div olusturma
    const gorevDiv=document.createElement('div'); // olusturucagim elementin adi div
    gorevDiv.classList.add('gorev-item'); // olusturulan div'in bir de class tanimlari var. 
 
    //li olusturma
    const gorevLi=document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText=gorev; // li'ye atama yaparken parametre olarak yolladigim gorev'i kullanicak.
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
 
    // ul'ye olusturdugumuz div'i ekleyelim(ekrana cikmasi icin)
    gorevListesi.appendChild(gorevDiv);
}


// ekranda silme ya da tamamlanma butonuna basildiginda local storage'da silme ya da tamamlanma emri
function localStorageSil{
  
    localStorageiArrayeDonustur();

    //splice ile item sil
    const silinecekElemanIndex=gorevler.indexOf(gorev);
    gorevler.splice(silinecekElemanIndex,1);

    localStorage.setItem('gorevler',JSON.stringify(gorevler))
}
