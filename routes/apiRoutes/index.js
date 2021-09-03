const router = require('express').Router();
const { notes } = require("../../db/db");

router.get("/api/notes", (req, res) => {
    //Return ALL notes
});

router.post("/api/notes", (req, res) => {
    //Create & Return NEW note
});

router.delete("/api/notes/:id", (req, res) => {
    //Delete note with id = req.param.id
    //Return ALL notes
});

module.exports = router;