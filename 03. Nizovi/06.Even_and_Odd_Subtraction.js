function solve(arr){

    
   for(let i = 0;i<arr.length;i++){
    //Svaki elemnt niza je konvertovan u broj
    arr[i]=Number(arr[i]);

    }

    let sumEven= 0;
    let sumOdd = 0;

    for( let elem of arr){

        if(elem %2 == 0 ){
            sumEven+=elem;
        } else {
            sumOdd+=elem;
        }
    }

    let result= sumEven - sumOdd;

    console.log(result);

}

solve( [1,2,3,4,5,6] );