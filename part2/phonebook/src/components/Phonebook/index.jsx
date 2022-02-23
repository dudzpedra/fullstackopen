import Form from "../Form";

const Phonebook = ({ persons, setPersons, newName, setNewName }) => {
  console.log("persons: ", persons);
  return (
    <div>
      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
      />
    </div>
  );
};

export default Phonebook;
