const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("addCommas returns correct string", () => {
  test("returns correctly", () => {
    expect(addCommas(1000)).toBe("1,000");
  })
})