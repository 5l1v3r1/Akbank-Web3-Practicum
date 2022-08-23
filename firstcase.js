let oddOrEven = (sayi) => {
    
    let toplam = 0 ;

    while (sayi) {
        toplam += sayi % 10;
        sayi = Math.floor(sayi / 10);
    }

    if(toplam % 2 === 0){
        document.write("Even")
    }else{
        document.write("Odd")
    }

  }


oddOrEven(755464565)

//oddOrEven fonksiyonuna verdiğimiz değere göre sayıların basamaklarının toplamı çift ise even tek ise odd döndürmektedir.