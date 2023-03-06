const userService = require('../services/service-game');

async function randomIcon(res, req) {
    const icon = await userService.randomIcon();
    res.body(icon);
}

module.exports= {
    randomIcon
}