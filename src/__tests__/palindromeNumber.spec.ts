import {isPalindrome} from '../leetcode_problems/palindromeNumber';

describe(isPalindrome, () => {
  it('should mark 121 as a palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it('should mark 21 as a palindrome', () => {
    expect(isPalindrome(21)).toBe(false);
  });
});
