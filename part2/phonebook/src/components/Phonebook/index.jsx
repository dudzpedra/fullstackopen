import Form from "../Form";

const Phonebook = ({ persons, setPersons, newName, setNewName, newPhone, setNewPhone }) => {
  return (
    <div>
      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
      />
    </div>
  );
};

export default Phonebook;
