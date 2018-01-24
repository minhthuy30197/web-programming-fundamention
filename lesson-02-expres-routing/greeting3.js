'use strict'
let express = require('express')

let app = new express()

app.get('/', (req,res) => {
  res.status(200).send('greeting')
})

app.listen(8000, function () {
  console.log('Listening at port 8000')
})