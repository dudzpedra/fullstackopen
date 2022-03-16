const { expect } = require('@jest/globals')
const listHelper = require('../utils/list_helper')

test('test dummy returns 1', () => {
    const blogs = []
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})