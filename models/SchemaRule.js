const mongoose = require('mongoose');

const SchemaBook = new mongoose.Schema({
    
   Name: {
    type:String,
    trim:true,
    require:true,
        
    },
   Title:{
    type:String,
    require:true,
    trim:true,
   },
   Price: {
    type:String,
    trim:true,
    require:true,
     
 },
 Address: {
    type:String,
    trim:true,
    require:true,
     
 },
 Contact: {
    type:String,
    require:true,
    maxLength:10,
    trim:true,
     
 },
 Poster:{
    type:String,
    require:true,
 },
 description:{
    type:String,
 }

});

const BookCollection = mongoose.model("detail",SchemaBook);

module.exports = BookCollection;
