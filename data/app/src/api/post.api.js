const bunyan = require('bunyan')

const LOG = bunyan.createLogger({name: 'PostApi'})

const {PostServices} = require("../services");
const postApi = require('express').Router()


const validateRegister = (req, res, next) => {
    // username min length 3
    if (!req.body.username || req.body.username.length < 3) {
        return res.status(400).send({
            msg: 'Please enter a username with min. 3 chars'
        });
    }
    next();
}

postApi.post('/', validateRegister, async (req, res, next) => {
    const {nickname, text, isActive} = req.body
    LOG.debug(`post(nickname=${nickname}, text=${text}, isActive=${isActive}`)
    let r = await PostServices.create(nickname, text, isActive)
    res.json(r)

})

/** Retourne la liste des posts. */
postApi.get( '/', async (req, res, next) => {

})

module.exports = postApi