import { add } from './main'

describe('Add', () => {
    test('should return 0 if string empty', () => {
        expect(add("")).toBe(0)
    })
})