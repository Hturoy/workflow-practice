const multiply = require("./multiply");

test("multiplies 69 by 420 to = 28980", () => {
  expect(multiply(69, 420)).toBe(28980);
});
