const { func } = require("./func");

test("Example 1", () => {
  // [1,null,2,3]
  const root = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  };

  const expected = [1, 3, 2];

  expect(func(root)).toEqual(expected);
});
test("Example 2", () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  };

  const expected = [4, 2, 5, 1, 3];

  expect(func(root)).toEqual(expected);
});
