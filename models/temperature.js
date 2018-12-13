const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var temperatureSchema = new Schema({
    node_id:Number,
    temperature:Number,
    timestamp:Date
});

temperatureSchema.statics.getAllItems = function () {
    var temp = this;
    var promise = new Promise(function(resolve, reject) {
        temp.find({},function(err, values) {
            if(err){
                reject(err);
            }
            resolve(values);
        });
    })
    return promise;
}

var Temperature = mongoose.model('Temperature', temperatureSchema);

module.exports = Temperature;