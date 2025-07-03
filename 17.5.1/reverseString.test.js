import reverseString from './reverseString.js'; 

describe('reverseString', () => {
  it('should reverse a simple string', () => {
    expect(reverseString("abc")).toBe("cba");
  });

    it('should reverse the string "строка"', () => {
        expect(reverseString("строка")).toBe("акортс");
    });

    it('should handle empty string', () => {
        expect(reverseString("")).toBe("");
    });

    it('should handle string with spaces', () => {
        expect(reverseString(" a b c ")).toBe(" c b a ");
    });

    it('should return null for non-string input', () => {
        expect(reverseString(123)).toBeNull();
        expect(reverseString(null)).toBeNull();
        expect(reverseString(undefined)).toBeNull();
    });
});