const { expect } = require("@jest/globals");
const listHelper = require("../utils/list_helper");

describe("total likes", () => {
  const emptyList = [];

  const listOfOne = [
    {
      _id: "62311f1c909d7ccf66006080",
      title: "My first blog",
      author: "Dudz Pedra",
      url: "https://github.com/dudzpedra",
      likes: 26,
      __v: 0,
    },
  ];

  const listOfMany = [
    {
      _id: "62311f1c909d7ccf66006080",
      title: "My first blog",
      author: "Dudz Pedra",
      url: "https://github.com/dudzpedra",
      likes: 26,
      __v: 0,
    },
    {
      _id: "62311f1c909d7ccf66006080",
      title: "My first blog",
      author: "Dudz Pedra",
      url: "https://github.com/dudzpedra",
      likes: 24,
      __v: 0,
    },
    {
      _id: "62311f1c909d7ccf66006080",
      title: "My first blog",
      author: "Dudz Pedra",
      url: "https://github.com/dudzpedra",
      likes: 50,
      __v: 0,
    },
  ];

  test("when list has one blog, equals the likes of that ", () => {
    const result = listHelper.totalLikes(listOfOne);
    expect(result).toBe(26);
  });

  test('of empty list equals 0', () => {
      const result = listHelper.totalLikes(emptyList)
      expect(result).toBe(0)
  })

  test('of list of many is calculated right', () => {
      const result = listHelper.totalLikes(listOfMany)
      expect(result).toBe(100)
  })
});
