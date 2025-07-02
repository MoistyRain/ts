// source: https://leetcode.com/problems/palindrome-number/
export function isPalindrome(x: number): boolean {
  // a negative number, by nature, cannot be a palindrome
  if (x < 0) return false;
  // convert the number into a string
  const str = x.toString();
  // reverses the string
  const reversed = str.split('').reverse().join('');
  // compares the strings
  return str === reversed;
}
