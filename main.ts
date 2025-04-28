export const add = (numbersString: string) => {
    let mathOperator = '+';
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
        // handle for * (mul)
        if (delimiterSubStr.length === 1) {
            if (delimiterSubStr === '*') {
                mathOperator = '*';
            }
        }
        let delimiter = delimiterSubStr.split('][').map((v) => {
            return v.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
        });
        numbersString = numbersString.substring(index + 1)
        delimiterRegEx = new RegExp(`${delimiter.join('|')}`)
    }
    let numbers = numbersString.split(delimiterRegEx).map(Number);
    // handle multiple of 7
    let multipleofSeven = numbers.filter((num) => num % 7 == 0)
    console.log(multipleofSeven)
    if (multipleofSeven.length) {
        let invalidsNumbers = multipleofSeven.join(',')
        Report.push(invalidsNumbers)
        throw new Error(`Multiple of 7 are not allowed: ${invalidsNumbers}`);

    }
    //check for -ve numbers
    let negativeNumers = numbers.filter((num) => num < 0);
    if (negativeNumers.length) {
        throw new Error(`Negative numbers are not allowed: ${negativeNumers.join(',')}`);

    }
    return mathOperation(mathOperator, numbers)
}

export const Report: string[] = []

function mathOperation(operationName: string, numbers: number[]) {
    switch (operationName) {
        case '+':
            return numbers.reduce((acc, num) => acc + num, 0);
        case '*':
            return numbers.reduce((acc, num) => acc * num);
        default:
            break;
    }
}

function isStringHasSpecialChar(str: string) {
    // we will check whether string has only number or any other char
    const specialRegex = /[^\d]/;
    // return true if other string consist other than number
    return specialRegex.test(str)
}