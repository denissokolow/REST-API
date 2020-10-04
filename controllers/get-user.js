const User = require('../model/user.js');

module.exports = async (req, res) => {
    const { login } = req.params;
    const user = await User.findOne({ login });

    if (user) {
        res.send(user);
    } else {
        res.status(404).send(`Пользователь с логином "${login}" не найден`);
    }
};