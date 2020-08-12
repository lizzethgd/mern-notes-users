const express = require('express')
const cors = require('cors')
const path = require("path")
const app = express()

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))

// routes
app.use('/api/users', require('./server/routes/users'))
app.use('/api/notes', require('./server/routes/notes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
  })

module.exports = app


