import { getStandardDeviation } from '../index'
import { list } from './fixtures'

test('getStandardDeviation', () => {
    expect(getStandardDeviation(list)).toBe(2.9832867780352594)
})