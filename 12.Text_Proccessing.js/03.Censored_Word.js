function solve(text, word){

    let newWord = "*".repeat(word.length);

     let result = text.replaceAll(word, newWord);
     console.log(result);
} 

function solveJudge(text, word){
    let newWord = "*".repeat(word.length);

    //Petlja vrti dok ne izmenimo na svim mestima
    while(text.includes(word)){
        text = text.replace(word, newWord);
    }

    console.log(text);
}
solve('A small sentence with some words', 'small');
solveJudge('A small sentence with some words', 'small');