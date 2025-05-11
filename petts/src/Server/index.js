const express=require('express')
const mongoose=require('mongoose');
const cors=required('cors')
const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/PetAlley")

app.listen(3001, ()=>{
  console.log('server is running')
})