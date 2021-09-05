const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    res.send("apiRoutes index!");
});

module.exports = router;