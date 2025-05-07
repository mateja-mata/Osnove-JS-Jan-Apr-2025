function solve(arr){

  let n = Number(arr.shift());
  let songs = {};
//1 DEO
  for(let i =0;i<n;i++){
    let input = arr.shift();
    let [piece, composer, key] = input.split("|");
    if(!songs.hasOwnProperty(piece)){
        songs[piece]={};
        songs[piece].composer = composer;
        songs[piece].key = key;
    }
  }

  //2 Deo
  let commands = arr.shift();
  while(commands !== "Stop"){
    let tokens = commands.split("|");
    let order = tokens[0];

    if(order === "Add"){
        let piece = tokens[1];
        let composer = tokens[2];
        let key = tokens[3];
        if(!songs.hasOwnProperty(piece)){
            songs[piece] = {};
            songs[piece].composer = composer;
            songs[piece].key = key;

            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    } else if(order === "Remove"){
        let piece = tokens[1];
        if(songs.hasOwnProperty(piece)){
            delete songs[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    } else if(order === "ChangeKey"){
        let piece = tokens[1];
        let newKey = tokens[2];
        if(songs.hasOwnProperty(piece)){
            songs[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    commands = arr.shift();
  }

  console.log;
  let finalList = Object.keys(songs);

  for(let f of finalList){
    console.log(`${f} -> Composer: ${songs[f].composer}, Key: ${songs[f].key}`);
  }
} solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
  )