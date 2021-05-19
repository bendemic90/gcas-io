const router = require("express").Router();
const { Client } = require("../../models/Client")
const authorizeAccessToken = require('../../server');

router.route("/api")

router.get('/', async (req, res) => {
    try {
        res.json({ message: 'hit home point' })
    } catch (err) {
        res.json(err)
    }
})

router.get('/api/messages/public-message', async (req, res) => {
    try {
        res.json({ message: `public endpoint` })
    } catch (err) {
        res.json(err)
    }
})

// router.get('/api/messages/protected-message', authorizeAccessToken, async (req, res) => {
//     try {
//         res.json({ message: `private endpoint` })
//     } catch (err) {
//         res.json({ message: `failed` })
//     }
// })

router.get('/clients/view', async (req, res) => {
    try {
        Client.find({})
            .then(result => {
                res.json(result)
            })
    } catch (err) {
        res.json(err)
    }
})

router.get('/api', async (req, res) => {
    try {
        res.json({ message: 'hit API' })
    } catch (err) {
        res.json(err)
    }
})

module.exports = router;
