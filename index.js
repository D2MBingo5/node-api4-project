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