const people = require('../dummy/people');

const resolvers = {
  Query: {
    people: () => people
  }
};

module.exports = resolvers;
