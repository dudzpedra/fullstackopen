const Form = ({ persons, setPersons, newName, setNewName }) => {
  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };
    const isContact = persons.find((person) => person.name === newName);
    if (isContact) {
      alert(`${newName} is already a contact in your list.`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };
  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <form onSubmit={addName}>
      Name: <input type="text" value={newName} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
