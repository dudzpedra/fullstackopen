const Form = ({ persons, setPersons, newName, setNewName }) => {
  const addName = (event) => {
    event.preventDefault();
    setPersons(
      persons.concat({
        name: newName,
      })
    );
    setNewName("");
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
