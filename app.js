require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { urlencoded } = require('express')
const port = process.env.PORT
const routes = require('./routes/index')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler.handle)

app.listen(port, () => {
    console.log(`bismillah ${port} x`);
})


module.exports = app