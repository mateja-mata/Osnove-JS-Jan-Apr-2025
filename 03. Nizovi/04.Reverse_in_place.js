function solve(input){

    let result = input.reverse().join(' ');

    console.log(result);
}

function solve2(arr){

    for(let i = 0;i<arr.length/2;i++){
        //Zameni arr[i] i arr[arr.length-1-i]
        
        swapElements(arr, i, arr.length-1 - i);

    }

    console.log(arr.join( " "));
    /// Ovo je ispravno jer ne kreiramo novi niz
    function swapElements(arr, i , j){
        let tmp = arr[i];
        arr[i]= arr[j]
        arr[j]=tmp;

    }
}
solve2 ( ['a', 'b', 'c', 'd', 'e'] );