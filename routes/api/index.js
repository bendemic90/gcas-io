const router = require("express").Router();
const { Client } = require("../../models/Client")

router.route("/api")

router.get('/', async (req, res) => {
    try {
        res.json({ message: 'hit home point' })
    } catch (err) {
        res.json(err)
    }
})

router.get('/api/clients/view', async (req, res) => {
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
