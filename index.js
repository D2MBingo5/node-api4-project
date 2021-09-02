require('dotenv').config()

const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors())

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

const users = [
    {
        username: 'johnny donuts',
        password: 'pass123'
    },
    {
        username: 'pastela',
        password: 'pass456'
    }
]

server.get('/api/users', (req, res) => {
    res.json({ users: users })
})

server.post('/api/register', (req, res) => {
    const newUser = req.body
    if(!newUser.username || !newUser.password) {
        res.status(400).json({ message: 'please provide username and password' })
    } else {
        users.push(newUser)
        return Promise.resolve(newUser)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'error encountered' })
            })
    }
})