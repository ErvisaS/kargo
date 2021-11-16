const { Double } = require('bson')
var mong = require('C://Users//Ervisa//Desktop//kargo//src/database');
const {model} = require('mongoose')
const autoIncrement = mong.autoIncrement;
const mongoose =require('mongoose')
//const autoIncrement = require('mongoose-auto-increment');

var Schema = mong.mongoose.Schema;
var schema = new Schema({
   
clientName:{
    type:String,
    parse:true
},
address:{
    type:String,
    parse:true
},
lat:{
    type:"number",
    parse:true
},

lng:{
    type:"number",
    parse:true
},
teslimDurumu:{
    type:String,
    parse:true
},
})
module.exports=model('kargolist',schema) ;
