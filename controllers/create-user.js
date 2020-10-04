const User = require('../model/user.js');

module.exports = async r => {
    const { login, password } = r.body;
    const x = await User.findOne({ login, password });
    if (x) return r.res.send('Такой пользователь уже есть!');
    const newUser = new User({ login, password });
    await newUser.save();
    r.res.send('Новый пользователь зарегестрирован');
}