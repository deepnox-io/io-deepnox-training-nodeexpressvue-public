/**
 * @see: https://andrewjohnburgess.com/2020/11/22/fully-testing-complex-mongoose-database-logic-using-testcontainers/
 */

const mongoose = require('mongoose')
const { v4: uuid } = require('uuid')

module.exports = function (callback) {
    let connection
    let model

    beforeEach(async function () {
        connection = await mongoose.createConnection(global.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        connection = connection.useDb(uuid())
        model = require('../../src/models')(connection)
        callback(model)
    })

    afterEach(async function () {
        await connection.close()
    })
}