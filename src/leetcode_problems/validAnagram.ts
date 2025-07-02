// source: https://leetcode.com/problems/valid-anagram/description/
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  // check if the string matches up
  const map = new Map<string, number>();

  // make a map of all the characters
  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (const c of t) {
    if (!map.has(c)) return false;
    map.set(c, map.get(c)! - 1);
    if (map.get(c)! < 0) return false;
  }

  return true;
}
