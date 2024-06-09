const mongoose = require('mongoose');

const SchemaBook = new mongoose.Schema({
    Poster: String,
    Name: {
       type:String,
       minLength:4,
       trim:true,
        
    },
    Author: String,
    Isbn: String,
    Price: Number,
    description:String,

});

const BookCollection = mongoose.model("kotwe",SchemaBook);

module.exports = BookCollection;
