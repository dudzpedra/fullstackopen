import axios from 'axios';
import style from './Contacts.module.css'
//import personsService from '../../services/persons.js'

const Contacts = ({ persons }) => {
  const deletePerson = (id) => {
    console.log('delete')
    //personsService.remove(id)
  }
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id} className={style.contact}>
          <h3>Contact: {person.name}</h3>
          <h4>Phone: {person.phone}</h4>
          <button onClick={deletePerson(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
