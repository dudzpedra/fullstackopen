import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Phonebook from "./components/Phonebook";
import Title from "./components/Title";

function App() {
  const [persons, setPersons] = useState([
    { name: "Dudz Pedra", phone: "98210-6869", id: 1 },
    { name: "Maria", phone: "98210-1234", id: 2 },
    { name: "Benjamin", phone: "98210-5678", id: 3 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const personsToShow = newSearch === '' ? persons : persons.filter(person => person.name.includes(newSearch))

  console.log("persons: ", persons);
  console.log('persons to show: ', personsToShow)

  return (
    <div className="App">
      <Title title="The Phonebook App" />
      <Phonebook
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        newSearch={newSearch}
        setNewSearch={setNewSearch}
      />
      <Contacts persons={personsToShow} />
    </div>
  );
}

export default App;
