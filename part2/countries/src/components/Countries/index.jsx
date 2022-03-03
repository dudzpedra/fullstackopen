const Countries = ({ countries, isVisible, handleShow }) => {
    return (
        <div>
            {countries.length > 10 &&
                <h2>Too many countries, try again</h2>
            }
            {countries.length <= 10 && countries.length > 1 && countries.map(c => (
                <div key={c.name}>
                    <h2>{c.name}</h2>
                    <button onClick={handleShow}>Show</button>
                </div>
            ))}
            {countries.length === 1 && countries.map(c => (
                <div key={c.name}>
                    <h2>{c.name}</h2>
                    <p>Capital: {c.capital}</p>
                    <p>Area: {c.area}</p>
                    <div>
                        <h3>Languages</h3>
                        {c.languages.map(l => (
                            <p>{l.name}</p>
                        ))}
                        <img src={c.flags.png} alt='Country Flag' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Countries