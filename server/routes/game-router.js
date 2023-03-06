const router = require('express').Router();
const game = require('../controllers/game-controller.js')

router.post("https://hp-api.onrender.com/api/characters", game.randomIcon);

module.exports = router;
