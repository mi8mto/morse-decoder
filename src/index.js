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
  let output = "";
  for (let i = 0; i < expr.length; i += 10) {
    const part = expr.slice(i, i + 10).replace(/^0+/, "");
    if (part[0] === "*") {
      output += " ";
    } else {
      let key = "";
      for (let i = 0; i < part.length; i += 2) {
        key += part.slice(i, i + 2) === "10" ? "." : "-";
      }
      output += MORSE_TABLE[key];
    }
  }
  return output;
}

module.exports = {
    decode,
};
