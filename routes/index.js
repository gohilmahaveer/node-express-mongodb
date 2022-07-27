var express = require('express');
var router = express.Router();
var connection = require('./database');
const Model = require('./model');
var moment = require('moment');
var sessionStorage = require('sessionstorage-for-nodejs');

router.get('/', (req, res, next) => {
  res.render('login', { title: 'Login' });
});

router.get('/home', (req, res, next) => {
  if (sessionStorage.getItem("user") == "Admin") {
    res.render('index', { title: 'Home' });
  } else {
    res.redirect("/");
  }
});

router.post('/home', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  if (username == "admin" && password == "admin") {
    sessionStorage.setItem("user", "Admin");
    res.render('index', { title: 'Home' });
  } else {
    res.redirect("/");
  }
});

router.get('/customers', async (req, res, next) => {
  if (sessionStorage.getItem("user") == "Admin") {
    try{
      const data = await Model.find().sort({_id:-1});
      res.render('customers', { data: data, title: 'Customer List' });
    }
    catch(error){
      res.render('customers', { data: 0, title: 'Customer List' });
    }
  } else {
    res.redirect("/");
  }
});

router.post('/customers', async (req, res, next) => {

  try{
    const data = await Model.find({ name: req.body.searchdata });
    res.render('customers', { data: data, title: 'Customer List' });
  }

  catch(error){
    res.render('customers', { data: 0, title: 'Customer List' });
  }

});

router.get('/add', (req, res, next) => {

  if (sessionStorage.getItem("user") == "Admin") {
    res.render('add', { title: 'Add Form' });
  } else {
    res.redirect("/");
  }
});

router.post('/addProcess', (req, res, next) => {

  const data = new Model({
    name: req.body.name,
    city: req.body.city,
    mobile: req.body.mobile
  });

  try {
    const dataToSave = data.save();
    res.redirect('/customers');
  }

  catch (error) {
    res.send('Something went wrong'); 
  }

});

router.get('/logout', function (req, res, next) {
  sessionStorage.removeItem("user");
  res.redirect("/");
});

module.exports = router;