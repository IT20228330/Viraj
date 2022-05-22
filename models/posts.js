const { default: mongoose } = require('mongoose');
const mngoose = require('mongoose');

const postSchema =new mongoose.Schema({

    BookId:{
        type:String,
        required:true
    },
    BookName:{
        type:String,
        required:true
    },
    BookAuthor:{
        type:String,
        required:true
    },
    BookGenre:{
        type:String,
        required:true
    },
    BookDesc:{
        type:String,
        required:true
    },
    BookPages:{
        type:String,
        required:true
    },
    BookCondition:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Posts', postSchema);