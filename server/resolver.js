/* eslint-disable import/no-extraneous-dependencies */

const { random, name } = require('faker');

const randomArray = (min, max, callback) => {
  const size = random.number({ min, max });
  return Array.from({ length: size }, callback);
};

const resolvers = {
  Query: {
    persons: () => {
      return randomArray(2, 6, () => ({
        firstname: name.firstName(),
        lastname: name.lastName(),
        jobType: name.jobType(),
      }));
    },
  },
};

module.exports = { resolvers };
