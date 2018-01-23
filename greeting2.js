let http = require('http')

let webApp = http.createServer(function (req, res) {
  res.writeHeader(200, {'Content-Type':'text/plain'})
  res.end('greeting')
})

const POST = 8000
webApp.listen(POST)
console.log(`listening at port ${POST}`)