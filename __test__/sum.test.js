import { sum } from "../src/math/sum";



describe ("sum()", () => {
  it('should return 3 if a = 1 and b = 2', () => {
    // Arrange
    const a = 1;
    const b = 2;

    // act
    const result = sum(a, b);

    expect(result).toBe(3); 
  })
})