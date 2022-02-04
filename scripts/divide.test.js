const divide = require("./divide");

test("divides 100 by 4 to = 25", () => {
  expect(divide(100, 4)).toBe(25);
});
