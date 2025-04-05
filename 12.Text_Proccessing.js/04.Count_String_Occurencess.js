function solve(str, targetWord){


     let counter = 0;
    let strSplited = str.split(" ");

        for(char of strSplited){

        if(char == targetWord){
                counter++;
            }
        }
    
    console.log(counter);

    // let count = 0;
        //Ovo ne moze u ovom zadatku jer se trazi broj pojavljivanja RECI a ne podstringa
    // while(str.includes(targetWord)){
    //     count ++;
    //     str = str.replace(targetWord, "");
    // }

} solve ('This is a word and it also is a sentence',
'is'
);