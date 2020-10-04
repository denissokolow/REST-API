const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

(async () => await mongoose.connect('mongodb://newbie:123@84.38.180.19/newusers'))();

module.exports = mongoose.model('User', new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
}));