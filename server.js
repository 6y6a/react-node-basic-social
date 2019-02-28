const express = require('express')
const mongoose = require('mongoose')

const app = express();

// DB config
const db = require('./config/keys').mongoURI

// Connect to mongo DB
mongoose.connect(db)
    .then(() => console.log('mongo DB connected'))
    .catch(() => console.log('error in connect mongo'))

app.get('/', (req, res) => res.send('Hello world!'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))


