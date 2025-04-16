import { add } from './main'

describe('Add', () => {
    test('should return 0 if string empty', () => {
        expect(add("")).toBe(0)
    })

    test('should return string as number if string consist only number', () => {
        expect(add("123")).toBe(123)
    })
})