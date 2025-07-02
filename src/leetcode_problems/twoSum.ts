// source: https://leetcode.com/problems/two-sum/
export function twoSum(nums: number[], target: number): number[] {
  // create a map
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    const complement = target - nums[i];
    // checks to see if the complement exists
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    // add current idx if the complement has not been found
    map.set(nums[i], i);
  }
  // return nothing if nothing was found
  return [];
}
