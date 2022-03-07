const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        id: 1,
        name: 'Verônica Pedra',
        number: '98124-9133'
    },
    {
        id: 2,
        name: 'Ju Luna',
        number: '98124-7843'
    },
    {
        id: 3,
        name: 'Ricardo Pedra',
        number: '98148-8133'
    },
    {
        id: 4,
        name: 'Leonardo Pedra',
        number: '98125-6733'
    },
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/', (req, res) => {
    res.send('<h1>A Node.js and Express App</h1>')
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    res.send(`
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${new Date()}</p>
        </div>
    `
    )
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    
    res.status(204).end()
})

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0
    return maxId + 1
}

const randomId = () => (Math.random() * 10000).toFixed(0)

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.content) {
        return res.status(400).json({
            error: 'content is missing!'
        })
    }
    const person = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: randomId()
    }
    
    persons = persons.concat(person)
    res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})