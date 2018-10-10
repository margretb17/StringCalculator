const add = require("./calculator"); 

it("should return zero on an empty string ", () => {
  expect(add("")).toBe(0);
});

it("should return number when only one number is in the string ", () => {
  expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("should sumarize multible numbers", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1,2,3,4")).toBe(10);
});

it("should allow new lines between numbers", () => {
  expect(add("1\n2")).toBe(3);
  expect(add("1\n2,3")).toBe(6);
});

it("should throw an exception when calling negative numbers", () => {
  expect(() => {
    add("-1,2");
  }).toThrow("Negatives not allowed:-1");
  expect(() => {
    add("2,-4,3,-5");
  }).toThrow("Negatives not allowed:-4,-5");
});

it("should ignore numbers that are bigger than 1000", () => {
  expect(add("1001, 2")).toBe(2);
  expect(add("1005,5,5")).toBe(10);
});

it("should allow a different delimeter", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//;\n3; 5")).toBe(8);
  expect(add("//hugb\n1hugb2")).toBe(3);
  expect(add("//hugb\n1hugb2hugb5")).toBe(8);
});