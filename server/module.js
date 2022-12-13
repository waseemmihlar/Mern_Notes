const mongoose=require('mongoose');


const schema={
    title:String,
    content:String
};


const model=mongoose.model('notes',schema);

module.exports=model;

