const reverseString = require('./reverseString.js'); 
test('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('should handle empty string', () => {
  expect(reverseString('')).toBe('');
});

test('should handle string with spaces', () => {
  expect(reverseString('  abc  ')).toBe('  cba  ');
});

test('should return null for non-string input', () => {
  expect(reverseString(123)).toBe(null);
});