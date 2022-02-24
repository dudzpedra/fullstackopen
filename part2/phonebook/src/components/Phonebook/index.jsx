import Form from "../Form";

const Phonebook = ({ persons, setPersons, newName, setNewName, newPhone, setNewPhone, newSearch, setNewSearch }) => {
  return (
    <div>
      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        newSearch={newSearch}
        setNewSearch={setNewSearch}
      />
    </div>
  );
};

export default Phonebook;
