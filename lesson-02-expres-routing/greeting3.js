'use strict'
let express = require('express')

let app = new express()

app.get('/', (req,res) => {
  res.status(200).send('greeting')
})

app.get('/chat', (req,res) => {
  let username = req.param('username')
  let ask = req.param('ask')
  if ((username === undefined) && (ask === undefined)) res.status(200).send('Hello')
  else
    if (ask === undefined) res.status(200).send('Hello, BinhSon')
    else {
      let date = new Date();
      let time = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      res.status(200).send(`Hello, BinhSon. It's ${time}:${minute}:${second} now`)
    }
})

app.listen(8000, function () {
  console.log('Listening at port 8000')
})