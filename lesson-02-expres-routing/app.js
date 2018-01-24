let express = require('express')

let app = new express()

app.get('/',function (req,res) {
  res.status(200).send('hello')
})

app.get('/about',function (req,res) {
  res.status(200).send('Hello! My name is Thuy')
})

app.listen(8000,function () {
  console.log('Listening at port 8000')
})