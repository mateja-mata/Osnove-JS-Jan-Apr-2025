function mathPower(x, y){
    //Zbog mnozenja mora da nam stoji 1
    let result=1;

    //Petlja koja ide do broja y
    for(let i=1;i<=y; i++){
        //Rezultat mnozimo brojem x
        result*=x;

    }

    console.log(result);
} mathPower(3, 4);


//SSta ako hocemo da ispisemo:
// Stepen 3 na 8 jednako je 256
