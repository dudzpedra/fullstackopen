import style from './Contacts.module.css'

const Contacts = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id} className={style.contact}>
          <h3>Contact: {person.name}</h3>
          <h4>Phone: {person.phone}</h4>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
