const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    email: { type: String, required: true, unique: true, },
    name: { type: String, required: true, },
    password: { type: String, required: true, },
    avatar: { type: String, default : 'https://bvydhue.vn//images/no-avatar.jpg'},
    phone: { type: String, required: true, },
    role: { type: Number, required: true, default: 1 },
    age: { type: Number, required: true, },
    gender: { type: String, required: true, },
    isVerified: { type : Boolean, default : false, }
});

module.exports = mongoose.model('User', schema) || mongoose.models.User;