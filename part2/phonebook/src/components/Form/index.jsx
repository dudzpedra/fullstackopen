const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
}) => {
  const addName = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };

    const isContact = persons.find((person) => person.name === newName);

    if (isContact) {
      alert(`${newName} is already a contact in your list.`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewPhone("")
    }
  };
  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => setNewPhone(event.target.value);

  return (
    <form onSubmit={addName}>
      <div>
        Name: <input type="text" value={newName} onChange={handleName} required />
      </div>
      <div>
        Number: <input type="number" value={newPhone} onChange={handlePhone} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
