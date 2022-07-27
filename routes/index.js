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

router.get('/logout', function (req, res, next) {
  sessionStorage.removeItem("user");
  res.redirect("/");
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

router.get('/display/(:id)', async (req, res, next) => {

  try {
    const data = await Model.findById(req.params.id);
    res.render('display', { data: data, title: 'Customer Profile', moment: moment });
  }
  
  catch(error) {
    res.send('Something Went Wrong');
  }
  
});

router.get('/edit/(:id)', async (req, res, next) => {
  
  try {
    const data = await Model.findById(req.params.id);
    res.render('edit', { data: data, title: 'Customer Profile', moment: moment });
  }
  
  catch(error) {
    res.send('Something Went Wrong');
  }

});

router.post('/editProcess/(:id)', async (req, res, next) => {

  const data = new Model({
    date: req.body.date,
    name: req.body.name,
    city: req.body.city,
    mobile: req.body.mobile,
    drsph: req.body.drsph,
    drcyl: req.body.drcyl,
    draxis: req.body.draxis,
    drva: req.body.drva,
    nrsph: req.body.nrsph,
    nrcyl: req.body.nrcyl,
    nraxis: req.body.nraxis,
    nrva: req.body.nrva,
    dlsph: req.body.dlsph,
    dlcyl: req.body.dlcyl,
    dlaxis: req.body.dlaxis,
    dlva: req.body.dlva,
    nlsph: req.body.nlsph,
    nlcyl: req.body.nlcyl,
    nlaxis: req.body.nlaxis,
    nlva: req.body.nlva,
    purpose: req.body.purpose,
    quality: req.body.quality,
    remark: req.body.remark,
    f1name: req.body.f1name,
    g1name: req.body.g1name,
    f1prise: req.body.f1prise,
    g1prise: req.body.g1prise,
    f2name: req.body.f2name,
    g2name: req.body.g2name,
    f3name: req.body.f3name,
    g3name: req.body.g3name,
    f2prise: req.body.f2prise,
    g2prise: req.body.g2prise,
    f3prise: req.body.f3prise,
    g3prise: req.body.g3prise,
    gst: req.body.gst,
    total: req.body.total
  });

  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(
        id, updatedData, options
    )

    res.redirect('/customers');
  }
  
  catch (error) {
  res.send("Something went wrong");
  }

});

router.get('/delete/(:id)', async (req, res, next) => {

  try {    
    const data = await Model.findByIdAndDelete(req.params.id)
    res.redirect('/customers');
  }

  catch (error) {
    res.send("Something went wrong");
  }

});

module.exports = router;

