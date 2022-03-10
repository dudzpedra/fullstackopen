const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as and command line argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://dudz:${password}@cluster0.3dcqe.mongodb.net/PhonebookApp?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    phone: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: 'Veronica Pedra',
    phone: '98124-9133'
})

person.save().then(result => {
    console.log(`Added ${person.name} number ${person.phone} to the PhonebookApp`)
})

Person.find({}).then(persons => {
    persons.forEach(person => console.log(person))
    mongoose.connection.close()
})