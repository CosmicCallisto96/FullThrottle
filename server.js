const express=require('express')
const mongoose=require('mongoose')
const member=require('./routers/memberRouter.js')
const cors=require('cors')
const dotenv=require('dotenv').config()
const path=require('path')
const app=express()
const port=process.env.PORT||5000
const url=process.env.MONGO_DB_URL||'mongodb://localhost:27017/ft'
app.use(cors());
console.log(typeof(app))
mongoose.connect( url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use('/api/member',member);
app.listen(port,()=>console.log(`server is running on ${port}`))