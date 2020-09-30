module.exports = function toReadable (number) {
  const numStr = number.toString();
  const numLength = numStr.length;
  let result = '';
  const numsToWords = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const numsToWords2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  for (let i = 0; i < numLength; i++) {
    if ( numStr.charAt(i) !== '0' && numLength - i === 4) {
        result += numsToWords[numStr.charAt(i)] + ' thousand ';
    }
        if ( numStr.charAt(i) !== '0' && numLength - i === 3) {
    console.log(numStr.charAt(i));
        result += numsToWords[numStr.charAt(i)] + ' hundred ';
    }

    if ( numLength - i === 2  && +numStr.slice(-2) >= 20 ) {
        result += numsToWords2[numStr.charAt(i)] + ' ' + numsToWords[numStr.charAt(i+1)];
        result = result.replace('zero', '');
    } else if (numLength - i === 2 && +numStr.slice(-2) === 10 ) {
        result += 'ten';
    } else if (numLength - i === 2 && +numStr.slice(-2) > 10 ) {
        result += numsToWords[+numStr.slice(-2)];
    } else if (numLength - i === 2 && +numStr.slice(-2) < 10 ) {
        result += numsToWords[+numStr.slice(-2)];
        result = result.replace('zero', '');
    }

    if (numLength === 1) {
        result += numsToWords[numStr.charAt(i)];
    }

}

  return result.trim();
}
