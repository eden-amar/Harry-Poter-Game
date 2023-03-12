
async function randomIcon(icon) {
    const keys = Object.keys(icon);
    return icon.name[keys[ keys.length * Math.random() << 0]]; // not working
}



module.exports = {
    randomIcon
}