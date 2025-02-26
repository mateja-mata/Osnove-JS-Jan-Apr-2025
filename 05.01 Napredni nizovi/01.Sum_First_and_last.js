function calculate(array){

    let lastElem = Number( array.pop());
    let firstElem;
    if(array.length>0){
     firstElem = Number(array.shift());
    } else {
        firstElem = lastElem;
    }
    console.log(firstElem + lastElem);

} calculate([2]);
    //Bez ugradjenih funkcija
function solve(arr){
    let firstElem = Number(arr[0]);

    let lastElem= Number(arr[arr.length-1]);


    console.log(firstElem + lastElem);
    

}solve([2,2]);
