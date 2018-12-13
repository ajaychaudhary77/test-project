var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Temperature = require('../models/temperature');


/* GET temperatures listing. */
router.get('/', function(req, res, next) {
  mongoose.connect("mongodb://localhost/temperature", function () {
    
    Temperature.getAllItems().then(function (result) {
      res.status(200).send(result);
    })
    .catch(function (params) {
      res.status(500).send(JSON.stringify({message:'unable to fetch data', error:params}));
    });
  });
});

/**
 * records a new temperature in the database
 * @param id id of the device that is sending the temperatuer use 1 if there is only one
 * @param temperature the temperature that is recorded by the device 
 * @param timestamp time in ms since Jan 1 1970 long value
 */
router.get('/add/:node_id/:temperature/:timestamp', function(req, res, next){

    //connect to the mongodb database named temperature
    mongoose.connect("mongodb://localhost/temperature", function () {
        var recievedDate = new Date(parseInt(req.params.timestamp));

        //create a new temperature object
        var temp = Temperature({
            node_id : req.params.node_id,
            temperature : req.params.temperature,
            timestamp : recievedDate.toString()
        });

        //save the record in the database
        temp.save(function(err) {
            console.log("error = " + JSON.stringify(err));
            if(!err){
                res.send({message:'Successfully saved in database', response:true})
            }
            else{
                res.status(500).send({message:"Values not saved in the database", response:false});
            }
            
        });
    });
})

//export the route so that it can used on importing
module.exports = router;