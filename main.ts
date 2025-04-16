export const add = (numbersString: string) => {
    // if string is empty return 0
    if (!numbersString?.trim().length) return 0;
    // if string without any delimiter return string as number
    if (!isStringHasSpecialChar(numbersString)) return parseInt(numbersString);
    //if string is seprated by comma newline like "1,2,3\n4"
    let delimiterRegEx = /\n|,/;
    //handle custom delimiter "\\[;]\n1;2;3"
    if (numbersString.startsWith('\\[')) {
        let index = numbersString.indexOf(']\n');
        let delimiterSubStr = numbersString.substring(2, index);
        console.log({ delimiterSubStr })
        let delimiter = delimiterSubStr.split('][').map((v) => {
            return v.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")
        });
        console.log(delimiter)
        numbersString = numbersString.substring(index + 1)
        delimiterRegEx = new RegExp(`${delimiter.join('|')}`)
    }
    let numbers = numbersString.split(delimiterRegEx).map(Number);
    return numbers.reduce((acc, num) => acc + num, 0);
}

function isStringHasSpecialChar(str: string) {
    // we will check whether string has only number or any other char
    const specialRegex = /[^\d]/;
    // return true if other string consist other than number
    return specialRegex.test(str)
}