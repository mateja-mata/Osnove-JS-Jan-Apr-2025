function solve(num){
    // Treba konvertovati num u string
    let str = `${num}`;
    // Prolazak po karakterima stringa `str` konvertujemo karaktere u cifre i sabiramo ih
    let sum = 0;
    for(let i =0;i<str.length; i ++){
        sum += Number(str[i]);//Konvertujemo karaktere u brojeve
    }

    //Treba proveriti da li broj sum sadrzi cifru 9
    //Konvertujemo sum u string i proveramo da li string sadrzi karakter '9'
    let sumStr=`${sum}`;

    if(sumStr.includes("9")){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}
solve(1233);
solve(999);