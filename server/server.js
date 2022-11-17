const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

// add below
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})
//add above

module.exports = server
