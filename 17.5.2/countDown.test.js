const countDown = require('./countDown.js'); 

test('should count down from 5', () => {
    console.log = jest.fn(); // Перехватываем console.log для проверки
    countDown(5);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenNthCalledWith(1, 5);
    expect(console.log).toHaveBeenNthCalledWith(2, 4);
    expect(console.log).toHaveBeenNthCalledWith(3, 3);
    expect(console.log).toHaveBeenNthCalledWith(4, 2);
    expect(console.log).toHaveBeenNthCalledWith(5, 1);
});

test('should handle countDown(0)', () => {
    console.log = jest.fn(); // Перехватываем console.log
    countDown(0);
    expect(console.log).not.toHaveBeenCalled();
});

test('should handle countDown(-1)', () => {
    console.log = jest.fn(); // Перехватываем console.log
    countDown(-1);
    expect(console.log).not.toHaveBeenCalled();
});