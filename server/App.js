const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')


const app=express();

app.use(cors());
app.use(express.json())


mongoose.connect('mongodb+srv://admin-waseem:wazeem998@cluster0.rwqxf1s.mongodb.net/NotesDB')
.then(console.log('successfully connected'))

app.use('/',require('./route'))

const port=5000;

app.listen(port,function(){
    console.log("server running @ port no 5000")
})







