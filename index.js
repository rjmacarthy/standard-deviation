import _ from 'lodash'

export const getMean = _.memoize((numbers) => _.sum(numbers) / _.size(numbers))

export const getStandardDeviation = _.memoize((numbers) =>
  Math.sqrt(
    getMean(
      _.map(numbers, (number) =>
        _.multiply(number - getMean(numbers), number - getMean(numbers)),
      ),
    ),
  ),
)
