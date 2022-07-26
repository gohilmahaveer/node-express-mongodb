var mysql = require('mysql');
const mongoose = require('mongoose');
const DATABASE_URL = "mongodb+srv://MGGOHIL:A3D5C086@cluster0.mhzab.mongodb.net/vision";
mongoose.connect(DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});

module.exports = database;