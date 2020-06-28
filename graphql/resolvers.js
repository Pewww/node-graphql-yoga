const {
  getPeople,
  getPerson,
  addPerson,
  deletePerson
} = require('../dummy/people');
const {getMovies} = require('../apis/movie');

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, {id}) => getPerson(id),
    movies: (_, {limit, rating}) => getMovies(limit, rating)
  },
  Mutation: {
    addPerson: (_, {
      name,
      age,
      gender
    }) => addPerson(name, age, gender),
    deletePerson: (_, {id}) => deletePerson(id)
  }
};

module.exports = resolvers;
