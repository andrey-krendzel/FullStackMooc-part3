const http = require('http')
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-2343"
    },
    {
      id: 4,
      name: "Mary Popendick",
      number: "39-23-6423122"
    }
  ]

  var currentTime = new Date();

  app.get('/info', (request, response) => {
    response.send('<p>Phonebook has info for ' + persons.length + ' people. </p>' + currentTime)
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => {
      console.log(person.id, typeof person.id, id, typeof id, person.id === id)
      return person.id === id
    })
    console.log(person)


    if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }

  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if ((!body.name)||(!body.number)) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }

    for (let i = 0; i< persons.length; i++){
      if (body.name === persons[i].name) {
        return response.status(400).json({ 
          error: 'name must be unique'
        })
      }
    }
  
    const person = {
      name: body.name,
      number: body.number,
      important: body.important || false,
      date: new Date(),
      id: Math.random(100000),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
