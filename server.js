var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser')
  apiRoutes = require('./routes/api.js')

mongoose.connect('mongodb://localhost/song-tribe', (err) => {
  console.log(err || "Connected to MongoDB (song-tribe) ")
})

//middleware - any code that runs in betwen request and response (eg logging a request before a response is sent out):
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
  res.json({message: "This is the root route..."})
})

app.use('/songs', apiRoutes)


app.listen(3000, (err) => {
  console.log(err || "Server is running on Port 3000")
})
