function bar(arr){

let pattern = /%(?<customer>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|%$.]*\|(?<count>\d+)\|[^|%$.0-9]*(?<price>\d+(\.\d+)?)\$/g;
let totalIncome = 0;

    for(let item of arr){
        if(item === 'end of shift'){
            break;
        }

        let pointer  = pattern.exec(item);

        while(pointer !== null){
            let customer = pointer.groups['customer'];
            let product = pointer.groups['product'];
            let count = Number(pointer.groups['count']);
            let price = Number(pointer.groups['price']);
            let totalPrice = count * price;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;
            pointer = pattern.exec(item);
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
} bar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
    );