const {people, getPerson, addPerson} = require('../dummy/people');

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id}) => getPerson(id)
  },
  Mutation: {
    addPerson: (_, {
      name,
      age,
      gender
    }) => addPerson(name, age, gender)
  }
};

module.exports = resolvers;
