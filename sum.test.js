const { test, expect } = require('@jest/globals');
const sum = require('./sum');

test('Soma de dois numeros 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});