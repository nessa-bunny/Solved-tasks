function scrabbleScore(str){
    let valueToLetters = [
        "AEIOULNRST",
        "DG",
        "BCMP",
        "FHVWY",
        "K",
        "",
        "",
        "JX",
        "",
        "QZ"
    ];
    let letterToValue = Array(26).fill(0);
    for (let i = 0; i < valueToLetters.length; ++i) {
        valueToLetters[i].forEach(x => letterToValue[x - 'A'] = i + 1);
    }
    console.log(letterToValue);
}