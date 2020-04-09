const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/plain')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`)
})
