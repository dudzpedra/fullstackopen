import Title from "../Title";
import personsService from '../../services/persons.js'
import { useState } from "react";
import Notification from "../Notification";
const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  newSearch,
  setNewSearch
}) => {
  const [notification, setNotification] = useState(null)

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
      personsService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName("");
        setNewPhone("");
        setNotification('Adicionado com sucesso.')
        setTimeout(() => setNotification(null), 5000)
      })
    }
  };
  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => setNewPhone(event.target.value);

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    
  };  

  return (
    <form onSubmit={addName}>
      <div>
        Search: <input type="text" value={newSearch} onChange={handleSearch} />
      </div>
      <Title title='Add New Contact'/>
      <div>
        Name:{" "}
        <input type="text" value={newName} onChange={handleName} required />
      </div>
      <div>
        Number:{" "}
        <input type="number" value={newPhone} onChange={handlePhone} required />
      </div>
      <button type="submit">Save</button>
      <Notification msg={notification} />
    </form>
  );
};

export default Form;
