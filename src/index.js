const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let result = '';

    for (let index = 0; index < expr.length; index += 10) {
        let MorseCode = '';
        let letter = expr.substring(index, index + 10);

        if (letter === '**********') {
            result += " ";
            continue;
        }

        letter = letter.substring(letter.indexOf("1")); 

        for (let index = 0; index < letter.length; index += 2) {
            let symbol = letter.substring(index, index + 2); 

            if (symbol === "10")
                MorseCode += '.';
            else
                MorseCode += '-'; 
        }
        result += MORSE_TABLE[MorseCode];
    }

    return result;
}

module.exports = {
    decode
}    
