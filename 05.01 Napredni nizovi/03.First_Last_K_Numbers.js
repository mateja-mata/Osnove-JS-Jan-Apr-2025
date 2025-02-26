function solve (arr){
    // Uzimamo prvi element niza koji je k
    let k = arr.shift();
    let n=arr.length;
    //Prvih K elemenata sa indeksima 0,1,2,3, k-1
    let firstKElem=arr.slice(0, k);
    //Poslednjih k elementa
    //let lastKElem = arr.slice(n-k);//Poslednjih k elemenata sa indeksima n-k, ...,n-3, n-2, n-1
    let lastKElem = arr.slice(-k);

    console.log(firstKElem.join(' '));
    console.log(lastKElem.join(" "));
}