const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const server = http.Server(app)

app.get('/', (request, response) => {
  response.send('Hello, World')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('listening on *:' + port)
})
