function racing(arr){

    let allNames = arr.shift().split(', ');

    let racers = {};//Prazan asocijativni niz
    //Dodajemo imena u asocijativni niz
    for(let name of allNames){
        racers[name] = 0;
    }

    let lettersPattern = /[A-Za-z]/g;
    let digitsPattern = /[0-9]/g;
    for(let item of arr){
        if(item === 'end of race'){
            break;
        }

        //Izvlacimo slova i brojeve
        let letters = item.match(lettersPattern);
        let digits = item.match(digitsPattern);
        let racerName = letters.join('');
        let distances = digits.map(Number);
        let racersDistance = 0;
        for(let d of distances){    
            racersDistance += d;
        }
        //Ako ime postoji u asocijativnom nizu tom kljucu dodaj vrednost
        if(racers[racerName] !== undefined){
            racers[racerName] += racersDistance;
        }

    }

    //Od asocijativnog niza pravimo obican
    let result = Object.entries(racers).sort((a,b) => b[1] -a[1]);

    if(result[0] !== undefined){
        console.log(`1st place: ${result[0][0]}`);
    }
    if(result[1] !== undefined){
        console.log(`2nd place: ${result[1][0]}`);
    }    
    if(result[2] !== undefined){
        console.log(`3rd place: ${result[2][0]}`);
    }
}
racing(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
    );