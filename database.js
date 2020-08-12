const mongoose = require('mongoose')

const PORT = process.env.MONGODB_URI || 4000

mongoose.connect(PORT, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err)=> {
    if (err) return console.log(err)
    console.log('The server is conncected to MongoDB database')
})