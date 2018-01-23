let http = require('http')

let webApp = http.createServer(function (req, res) {
  let url = req.url
  console.log(url)
  if (url === '/') res.end('greeting')
  else
    if (url === '/chat') res.end('Hello')
    else
      if (url === '/chat?username=BinhSon') res.end('Hello, BinhSon')
      else
        if (url === '/chat?username=BinhSon&ask=time') {
          let date = new Date();
          let time = date.getHours()
          let minute = date.getMinutes()
          let second = date.getSeconds()
          res.end(`Hello, BinhSon. It's ${time}:${minute}:${second} now`)
        }
        else
          if (url === '/chat?ask=time') {
            let date = new Date();
            let time = date.getHours()
            let minute = date.getMinutes()
            let second = date.getSeconds()
            res.end(`Hello. It's ${time}:${minute}:${second} now`)
          }
  res.writeHeader(200, {'Content-Type':'text/plain'})
})

const PORT = 8000
webApp.listen(PORT)
console.log(`listening at port ${PORT}`)