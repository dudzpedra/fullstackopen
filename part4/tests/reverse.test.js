const { expect } = require('@jest/globals')

const reverse = require('../utils/for_testing').reverse

test('reverse of a', () => {
    const result = reverse('a')
    expect(result).toBe('a')
})

test('reverse of love', () => {
    const result = reverse('love')
    expect(result).toBe('evol')
})

test('reverse of eduardo', () => {
    const result = reverse('eduardo')
    expect(result).toBe('odraude')
})

