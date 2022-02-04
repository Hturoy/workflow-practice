const subtract = require("./subtract");

test("subtracts 5 from 10 to = 5", () => {
  expect(subtract(10, 5)).toBe(5);
});
