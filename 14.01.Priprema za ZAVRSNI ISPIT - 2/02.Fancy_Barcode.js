// regex.test(str) metodu koristiti samo kada se jedanput poziva nad regex
//inace ..
function solve(arr){

    let n =Number (arr.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

    for(let i = 0; i<n; i++){
        let barcode = arr.shift();
        let check = barcode.match(pattern);//Vraca NULL ako nema poklapanja, vraca niz poklapanja ako ga ima

        if(check){
            let productGroup = '';
            let digitPattern= /\d/g;
            let alldigits = barcode.match(digitPattern);
            if(alldigits){
                productGroup = alldigits.join('');
            } else {
                productGroup = "00";
            }

            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }

} solve((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
    );