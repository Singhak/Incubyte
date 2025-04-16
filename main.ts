export const add = (numbersString: string) => {
    // if string is empty return 0
    if (!numbersString?.trim().length) return 0;
    // if string without any delimiter return string as number
    if (!isStringHasSpecialChar(numbersString)) return parseInt(numbersString);
    //if string is seprated by comma newline like "1,2,3\n4"
    let delimiterRegEx = /[\n,]/;
    let numbers = numbersString.split(delimiterRegEx).map(Number);
    return numbers.reduce((acc, num) => acc + num, 0);
}

function isStringHasSpecialChar(str: string) {
    // we will check whether string has only number or any other char
    const specialRegex = /[^\d]/;
    // return true if other string consist other than number
    return specialRegex.test(str)
}