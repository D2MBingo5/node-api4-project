require('dotenv').config()

const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors())

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

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})