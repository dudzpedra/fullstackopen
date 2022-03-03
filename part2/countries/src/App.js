import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Form from './components/Form';

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handler = response => setCountries(response.data)
    const promise = axios.get('https://restcountries.com/v2/all')
    promise.then(handler)
  }, [])

  const handleSearch = event => setSearch(event.target.value)

  const countriesToShow = search === '' ? countries : countries.filter(country => country.name.includes(search))

  const handleShow = () => setIsVisible(!isVisible)

  return (
    <div className="App">
      <h1>The Countries App</h1>
      <Form value={search} onChange={handleSearch} />
      <Countries countries={countriesToShow} isVisible={isVisible} handleShow={handleShow} />
    </div>
  );
}

export default App;
