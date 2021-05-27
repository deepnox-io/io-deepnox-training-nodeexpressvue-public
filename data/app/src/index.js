const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const {PostApi} = require('./api')

mongoose.connect('mongodb://db:27017/microblogging', {useNewUrlParser: true, useUnifiedTopology: true})

const main = () => {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/post', PostApi)
    const port = 3000 || process.env.PORT
    app.listen(port, () => {
        console.log(`Microblogging API server is listening on port: ${port}`)
    })
}

main()

