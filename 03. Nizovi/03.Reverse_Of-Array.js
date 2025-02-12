function solve(n, arr){

    let newArr = [];

    for(let i = 0;i< n;i++){
        newArr[i]=arr[i];
    }

    let output= ' ';
    for(let j = n-1;j>=0; j--){
        output+=`${newArr[j]} ` ;//Konkatenacija stringova
    }

    console.log(output);


}
//Drugo resenje
function solve2(n,arr){
    //Ugradjena funkcija za "odsecanje" niza na odredjenu duzinu, tj uzimamo samo potrebno
    let newArr= arr.slice(0, n);
    //Ugradjena funkcija za " okretanje " zeljenog dela
    let newArrRev=newArr.reverse();
    //Ugradjena funkcija za join
    let result = newArrRev.join( ' ');
    console.log(result);
}


function solve3(n, arr){
    console .log(arr.slice(0, n).reverse().join(' '));
}
solve3(3, [10, 20, 30, 40, 50]  );