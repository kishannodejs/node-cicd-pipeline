var data = {
  portal: "TutorialsPoint",
  tagLine: "SIMPLY LEARNING",
  location: "Hyderabad"
}

const express = require('express')
require('dotenv').config()
const app = express()

//console.dir(app.locals.title)

app.post('/', function (req, res) {
 // res.send({status:200,"name":"Kishan"});
 res.json(data);
})

app.get('/', function (req, res) {
   res.send({status:200,"name":"Kishan"});
  res.json(data);
 })

app.listen(process.env.PORT, () => {
console.log(process.env.PORT,"aaaaaaaaaaaaaaaa");
} )


app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})


// npm install -g nodemon
// To install nodemon as a dev dependecy:

// npm install --save-dev nodemon