function solve(n, k){
    
    let result = [1];
    for(let i = 1; i<n; i++){
        let lastKElems= result.slice(-k);//-k Nam je za broj k POSLEDNJIH BROJEVa

        let sum= 0;
        for(let elem of lastKElems){
            sum+=elem;
        }
        result.push(sum);
    }

    console.log(result.join(' '));


} solve(6, 3)
solve (8, 2) //FIBONACIJEV NIZ