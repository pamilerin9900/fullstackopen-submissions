// Persons.js
const Persons = ({ persons }) => (
  <ul>
    {persons.map(person => (
      <li key={person.name}>{person.name} — {person.number}</li>
    ))}
  </ul>
)
export default Persons
