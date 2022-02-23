import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Phonebook from "./components/Phonebook";
import Title from "./components/Title";

function App() {
  const [persons, setPersons] = useState([{ name: "Dudz Pedra", phone: "98210-6869", id: 1 }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("")
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
      />
      <Contacts persons={persons} />
    </div>
  );
}

export default App;
