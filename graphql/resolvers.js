const {people, getPerson} = require('../dummy/people');

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id}) => getPerson(id)
  }
};

module.exports = resolvers;
