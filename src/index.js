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
    let arr = expr.split('');
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, 10));
    }
    let dArr = [];

    for (let i = 0; i<newArr.length; i++){
      dArr[i] = newArr[i].reduce((a,b) => (a.concat(b)))
    }

    for (let i = 0; i<newArr.length; i++){
    while(dArr[i].charAt(0) === '0')
  {
  dArr[i] = dArr[i].substring(1);
    }}

    let lArr = [];
for (let i = 0; i<dArr.length; i++){
lArr.push(dArr[i].match(/.{1,2}/g))
}

for (let i = 0; i<lArr.length; i++){
for (let j = 0; j<lArr[i].length; j++){
if (lArr[i][j] === '10'){
  lArr[i][j] = '.'
}
if (lArr[i][j] === '11'){
  lArr[i][j] = '-'
}
}


}

let lastArr = [];
for (let i = 0; i<lArr.length; i++){
lastArr[i] = lArr[i].reduce((a,b) => (a.concat(b)))

}

let string = '';
for (let i = 0; i<lArr.length; i++){
string = MORSE_TABLE[lastArr[i]] + string;

}
let lastString = string.split('').reverse().join('');
let newString = lastString.replace(/denifednu/g, ' ');

    return newString;
}

module.exports = {
    decode
}