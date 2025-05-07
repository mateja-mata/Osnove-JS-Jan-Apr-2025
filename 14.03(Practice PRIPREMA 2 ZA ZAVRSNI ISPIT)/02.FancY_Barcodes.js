function solve(arr){

    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

    let n = Number(arr.shift());

    for(let i =0;i<n;i++){
        let barcode = arr.shift();
        let check = barcode.match(pattern);

        if(check){
            let productGroup = '';
            let digitPattern = /\d/g;
            let allDigits = barcode.match(digitPattern);
            
            if(allDigits){
                productGroup = allDigits.join("");
            } else {
                //Ako nema mecovanja
                productGroup = "00";
            }

            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    
    }

} solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
    );