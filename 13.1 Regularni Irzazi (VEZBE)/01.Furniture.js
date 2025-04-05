function solve(arr){
    let regexp = />>(?<name>[A-Z][A-Za-z\s]*)<<(?<price>\d+(\..\d+)?)!(?<qty>\d+)/g;

    let total = 0;

    console.log("Bought furniture:")
    for(let item of arr){

        if(item === 'Purchase'){
            break;
        }

        let pointer  = regexp.exec(item);
        while (pointer !== null){
            let name = pointer.groups['name'];
            let price = pointer.groups['price'];
            let quantity = pointer.groups['qty'];
            console.log(`${name}`);
            total += Number(price) * Number(quantity);
            pointer  = regexp.exec(item);
        }

    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}


solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
    );


