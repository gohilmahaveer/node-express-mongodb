const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    date: {
        required: true,
        type: Date
    },
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
    },
    drsph: {
        type: String
    },
    drcyl: {
        type: String
    },
    draxis: {
        type: String
    },
    drva: {
        type: String
    },
    nrsph: {
        type: String
    },
    nrcyl: {
        type: String
    },
    nraxis: {
        type: String
    },
    nrva: {
        type: String
    },
    dlsph: {
        type: String
    },
    dlcyl: {
        type: String
    },
    dlaxis: {
        type: String
    },
    dlva: {
        type: String
    },
    nlsph: {
        type: String
    },
    nlcyl: {
        type: String
    },
    nlaxis: {
        type: String
    },
    nlva: {
        type: String
    },
    purpose: {
        type: String
    },
    quality: {
        type: String
    },
    remark: {
        type: String
    },
    f1name: {
        type: String
    },
    g1name: {
        type: String
    },
    f1prise: {
        type: Number
    },
    g1prise: {
        type: Number
    },
    f2name: {
        type: String
    },
    g2name: {
        type: String
    },
    f3name: {
        type: String
    },
    g3name: {
        type: String
    },
    f2prise: {
        type: Number
    },
    g2prise: {
        type: Number
    },
    f3prise: {
        type: Number
    },
    g3prise: {
        type: Number
    },
    gst: {
        type: Number
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model('Data', dataSchema)