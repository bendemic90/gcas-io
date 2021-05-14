const router = require("express").Router();

router.route("/api")

router.get('/', async (req, res) => {
    try {
        res.json({ message: 'hit home point' })
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
