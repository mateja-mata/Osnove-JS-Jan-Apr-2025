function solve(str, char, result){
  /*  let replaced = "";
    for(let i = 0; i < str.length;i++){
        if(str[i] != "_"){
            replaced = replaced + str[i]//Konkaatenacija stringova
        } else {
            replaced = replaced + char;
        }

    }
  */
    let replaced = str.replace("_", char)//Funkcija za zamenu stringova, tj ugradjena funkcija za sve ono sto rucno pisemo gore      

    if(replaced == result){
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}

solve('Str_ng', 'I', 'Strong');