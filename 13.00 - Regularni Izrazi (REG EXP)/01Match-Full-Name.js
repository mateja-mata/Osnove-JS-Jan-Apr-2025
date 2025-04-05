function matching (text){
    //\b - WORD BOUNDERY - Ogranicava rec u ovom slucaju da rec pocinje sa ovim uslovom i zavrsava se to nam je \b na kraju
    let regexp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let allMatches = text.match(regexp);
    let result = allMatches.join(' ');

    console.log(result);

} matching(" Peter Smith, peter smith, Peter smith, peter Smith, PEter Smith, Peter SmIth, Lily Everett");