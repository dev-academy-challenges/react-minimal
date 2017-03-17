var express = require('express')

var PORT = process.env.PORT || 3000

var server = express()
server.use(express.static('.'))

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
