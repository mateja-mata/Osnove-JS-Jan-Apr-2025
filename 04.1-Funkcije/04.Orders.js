function solve(product, quantity){

    let price = 0;

    switch (product){
            case "coffee":
                price=1.5 * quantity
                break;
            case "water":
                price = 1 * quantity
                break;
            case "coke":
                price = 1.4 * quantity
                break;
            case "snacks":
                price = 2 * quantity

    }

    console.log(price.toFixed(2));

}  solve("coffee", 2);


function solveArrow(product, quantity){

    let generatePrice = (p , q) =>  (p == "coffee") ? 1.5 * q : (p == "water") ? q : (p == "coke") ? 1.4 * q : 2 * q 
    console.log(generatePrice(product, quantity).toFixed(2));

} solveArrow ("coffee", 2);

/*
if(uslov){
    return v1;
} else {
    return v2;
}

return iuslov ? v1 : v2;  AKO NIJE V1 ispunjen onda ide posle : v2

OVE DVE KOMANDE ISTO RADE 
*/