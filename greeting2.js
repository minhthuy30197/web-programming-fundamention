let http = require('http')

let webApp = http.createServer(function (req, res) {
  let url = req.url
  console.log(url)
  if (url === '/') res.end('greeting')
  else
    if (url === '/chat') res.end('Hello')
    else
    if (url === '/chat?username=BinhSon') res.end('Hello, BinhSon')
  res.writeHeader(200, {'Content-Type':'text/plain'})
})

const POST = 8000
webApp.listen(POST)
console.log(`listening at port ${POST}`)