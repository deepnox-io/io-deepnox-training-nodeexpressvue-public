/**
 * @see: https://andrewjohnburgess.com/2020/11/22/fully-testing-complex-mongoose-database-logic-using-testcontainers/
 */

const { GenericContainer } = require('testcontainers');

module.exports.mochaHooks = {
    beforeAll: async function () {
        this.timeout(60 * 1000);

        global.mongoContainer = await new GenericContainer("mongo", "latest")
            .withEnv("MONGO_INITDB_ROOT_USERNAME", "root")
            .withEnv("MONGO_INITDB_ROOT_PASSWORD", "example")
            .withExposedPorts(27017)
            .start();

        global.mongoUrl = `mongodb://root:example@127.0.0.1:${global.mongoContainer.getMappedPort(27017)}`;
    },

    afterAll: async function() {
        await global.mongoContainer.stop();
    }
}