'use strict'
let express = require('express')

let app = new express()

app.set('view engine','ejs')

app.get('/', function (req, res) {
  let view = 'greeting'
  let param = {name: 'Thuy'}
  res.status(200).render(view, param)
})


app.listen(8000, function () {
  console.log('listening at port 8000')
})