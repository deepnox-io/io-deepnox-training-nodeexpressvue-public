const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const bunyan = require('bunyan')

const LOG = bunyan.createLogger({name: 'index', level: 'DEBUG'})

const {PostApi} = require('./api')

mongoose.connect('mongodb://db:27017/microblogging', {useNewUrlParser: true, useUnifiedTopology: true})

const main = () => {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/post', PostApi)

    // Log errors
    app.use((err, req, res, next) => {
        console.error(err.stack)
        next(err)
    }

    // Retourne au client une erreur lisible
    app.use((err, req, res, next) => {
        res.status(500)
        res.render('error', {error: err})
    })

    app.use((err, req, res, next) => {
        const simplified_err = {message: err.message, stack: err.stack}
        LOG.error(simplified_err)
        res.status(500).send(simplified_err)
        next()
    })


    const port = 3000 || process.env.PORT
    app.listen(port, () => {
        console.log(`Microblogging API server is listening on port: ${port}`)
    })
}

main()

