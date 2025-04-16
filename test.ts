import { add } from './main'

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
    test('should handle cutom delimiter ;', () => {
        expect(add("\\[;]\n1;2;3")).toBe(6)
    })
    test('should handle cutom delimiter of any length ***', () => {
        expect(add("\\[***]\n1***2***3")).toBe(6)
    })
    test('should handle cutom multi delimiter [*][;]', () => {
        expect(add("\\[*][;]\n1*2;3")).toBe(6)
    })
    test('should handle multiple delimiters with length longer than one char [**][;]', () => {
        expect(add("\\[**][;]\n1**2;3")).toBe(6)
    })
})