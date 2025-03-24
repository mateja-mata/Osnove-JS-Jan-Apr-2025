function solve(arr){

    let storage = {};

    for(let elem of arr){
        let [item, qty] = elem.split(" ");
        qty = Number(qty);
        if(!storage.hasOwnProperty(item)){
            storage[item] = qty;
        } else {
            let oldQty = storage[item];
            storage[item] = oldQty + qty;
        }
    }

    let entries = Object.entries(storage);

    for(let [item, qty] of entries){
        console.log(`${item} -> ${qty}`);
    }
} solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    );