const Contacts = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <h3 key={person.name}>{person.name}</h3>
      ))}
    </div>
  );
};

export default Contacts;
