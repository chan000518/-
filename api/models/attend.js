const mongoose = require('mongoose');

const attendSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
    },
    attendList: [{
      attendIdx:{
        type: Number,
        require: true,
    },
    status:{
        type: Boolean,
        default: false,
    }}],
});

const Attend = mongoose.model('Attend', attendSchema);

module.exports = { Attend }