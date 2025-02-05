function solve (n1, n2, n3){

    let sum = n1 + n2 + n3;

    if(sum == Math.floor(sum)){

        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }


}

