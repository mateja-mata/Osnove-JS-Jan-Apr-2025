function solve(fn, ln, hc){
    let obj = {};
    obj.name = fn;
    obj.lastName = ln;
    obj.hairColor = hc;

    let text = JSON.stringify(obj);
    console.log(text);
}

solve('George', 'Jones', 'Brown');