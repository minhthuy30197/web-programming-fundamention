'use strict'
let express = require('express')

let app = new express()

app.get('/', (req,res) => {
  res.status(200).send('greeting')
})

app.get('/chat', (req,res) => {
  let username = req.param('username')
  if (username === undefined) res.status(200).send('Hello')
  else res.status(200).send('Hello, BinhSon')
})

app.listen(8000, function () {
  console.log('Listening at port 8000')
})