const User = require('../model/user.js');

module.exports = async (req, res) => {
    res.send(await User.find());
};