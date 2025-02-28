const sum = (a, b) => a + b;

test("Soma de 2 + 3 deve ser 5", () => {
  expect(sum(2, 3)).toBe(5);
});
