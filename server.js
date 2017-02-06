import express from 'express'
import path from 'path'

const app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static('client/build'))

app.get('/', function(req, res) {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`))
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})