const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let exprArr = expr.split(''),
        wordArr = [],
        letter = '',
        word = '',
        result;

    for (let i = 0; i < exprArr.length; i += 10) {
        for (let j = 0; j < 10; j += 2) {
            for (let k = 0; k < 2; k++) {
                letter += exprArr[i + j + k];
            }

            if (letter === '10') {
                word += '.';
            } else if (letter === '11') {
                word += '-';
            } else {
                word += ' '
            }

            letter = '';
        }
        wordArr.push(MORSE_TABLE[word.trim()] || ' ');
        word = '';
    }

    result = wordArr.join('');
    return result;
}

module.exports = {
    decode
}
