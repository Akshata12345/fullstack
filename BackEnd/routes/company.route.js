const express = require('express');
const app = express();
const companyRoute = express.Router();

// Company model
let Company = require('../models/Company');

// Add  Company
companyRoute.route('/create').get((req, res, next) => {
  const company = new Company({
    name: 
     'Terralogic',
   
   code: 'terra',
  
   location: 'Bangalore'
  });
  Company.create(company, (data, error) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Company
companyRoute.route('/').get((req, res) => {

  Company.find((error, data) => {
    if (error) {
      res.json(error)
      
    } else {
      res.json(data)
    }
  })
 // Company.find().then(x=>{console.log(x)})
})

// Get single company
companyRoute.route('/read/:id').get((req, res) => {
  Company.findById(req.params.id, (error, data) => {
    console.log(error);
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update company
companyRoute.route('/update/:id').put((req, res, next) => {
  Company.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete company
companyRoute.route('/delete/:id').delete((req, res, next) => {
  Company.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = companyRoute;