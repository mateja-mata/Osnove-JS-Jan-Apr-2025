function solve (letters){

    function palindromeLen(leftIndex, rigthIndex){
        while(leftIndex>=0 && rigthIndex<letters.length && letters[leftIndex] == letters[rigthIndex]){
            leftIndex--;
            rigthIndex++;
        }
        return rigthIndex - leftIndex -1;
    }

    let maxLen = 0;

    //1) Prolazimo kroz sve karaktere i formiramo palindrome oko tih centralnih tacaka (detektuje palindrome nepranih duzina)
   for (let c = 0; c<letters.length;c++){
        let len =  palindromeLen(c, c);
        if(len >maxLen){
            maxLen = len;
        }
    }
   
    //2) Prolazimo kroz sve parove susednih karaktera i formiramo palindrome oko tih parova (detektuje palindrome parnih duzina)
    for (let c = 0; c<letters.length-1; c++){
        let len = palindromeLen(c, c+1);
            if(len>maxLen){
                maxLen = len
            }
        }
    
    console.log(maxLen);    
}

solve("ahcchxu");