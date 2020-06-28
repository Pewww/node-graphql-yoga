const people = [
  {
    id: '1',
    name: 'Caden',
    age: 15,
    gender: 'male'
  },
  {
    id: '2',
    name: 'Pewww',
    age: 21,
    gender: 'male'
  }
];

const getPerson = (id) =>
  people.filter(({id: _id}) => id === _id)[0];

const addPerson = (name, age, gender) => {
  const newPerson = {
    id: String(people.length + 1),
    name,
    age,
    gender
  };

  people.push(newPerson);

  return newPerson;
};

module.exports = {
  people,
  getPerson,
  addPerson
};
