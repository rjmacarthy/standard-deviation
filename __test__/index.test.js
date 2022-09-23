import { getStandardDeviation, getMean } from '../index'
import { list } from './fixtures'

test('getStandardDeviation', () => {
    expect(getStandardDeviation(list)).toBe(2.9832867780352594)
    expect(getMean(list)).toBe(7)
})