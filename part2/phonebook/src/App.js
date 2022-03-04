import { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Phonebook from "./components/Phonebook";
import Title from "./components/Title";
import personsService from './services/persons.js'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const personsToShow = newSearch === '' ? persons : persons.filter(person => person.name.includes(newSearch))

  useEffect(() => {
    personsService.getAll().then(initialState => setPersons(initialState))
  }, [])

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
