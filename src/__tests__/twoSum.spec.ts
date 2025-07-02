import {twoSum} from '../leetcode_problems/twoSum';

describe(twoSum, () => {
  it('should return 0 and 1', () => {
    expect(twoSum([1, 9, 11, 45], 10)).toStrictEqual([0, 1]);
  });

  it('should return nothing', () => {
    expect(twoSum([1, 9, 11, 45], 22)).toStrictEqual([]);
  });
});
