import { sum } from '../sum.ts';
import '@testing-library/jest-dom';

it('should return sum of two numbers', () => {
  const result = sum(3, 8);
  expect(result).toBe(11);
});
