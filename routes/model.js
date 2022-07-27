const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    mobile: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Data', dataSchema)