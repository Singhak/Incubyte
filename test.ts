import { add, Report } from './main'


describe('Add', () => {
    test('should return 0 if string empty', () => {
        expect(add("")).toBe(0)
    })

    test('should return string as number if string consist only number', () => {
        expect(add("123")).toBe(123)
    })

    test('should handle delimiter comma', () => {
        expect(add("1,2,3")).toBe(6)
    })

    test('should handle delimiter comma alogwith newline', () => {
        expect(add("1,2\n3")).toBe(6)
    })
    test('should handle custom delimiter ;', () => {
        expect(add("\\[;]\n1;2;3")).toBe(6)
    })
    test('should handle custom delimiter ;', () => {
        expect(add("\\[*]\n2*2*3")).toBe(12)
    })
    test('should handle cutom delimiter of any length ***', () => {
        expect(add("\\[***]\n1***2***3")).toBe(6)
    })
    test('should handle custom multi delimiter [*][;]', () => {
        expect(add("\\[*][;]\n1*2;3")).toBe(6)
    })
    test('should handle multiple delimiters with length longer than one char [**][;]', () => {
        expect(add("\\[**][;]\n1*2;3")).toBeNaN()
    })
    test('should handle multiple delimiters with length longer than one char [**][;]', () => {
        expect(add("\\[***][;]\n1***2;3")).toBe(6)
    })
    test('should handle string having -ve numbers', () => {
        expect(() => add("\\[***][;]\n1***-2;3")).toThrow('Negative numbers are not allowed: -2');
    });
    test('should handle multiple of 7 to avoid hack', () => {
        expect(() => add("\\[;]\n1;7")).toThrow('Multiple of 7 are not allowed: 7');
    })
    test('Get report of hack attemps', () => {
        expect(1).toBe(Report.length)
    })

    test('Get report of hack attemps and get values', () => {
        expect('7').toBe(Report[0])
    })
    // test('should handle multiple of 7 to avoid hack', () => {
    //     expect(() => add("\\[;]\n1;7;21")).toThrow('Multiple of 7 are not allowed: 7,21');
    // })
    // test('Get report of hack attemps now length 2', () => {
    //     expect(2).toBe(Report.length)
    // })
    // test('Get report of hack attemps and get multiple values', () => {
    //     expect('7,21').toBe(Report[1])
    // })
})