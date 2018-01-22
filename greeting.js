let http = require('http')

let webApp = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' })
  res.end('Hello World')
})
const PORT = 8000
webApp.listen(PORT)
console.log(`listening at port ${PORT}`)