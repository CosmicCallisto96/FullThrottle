const express=require('express')
const mongoose=require('mongoose')
const member=require('./routers/memberRouter.js')
const cors=require('cors')
const dotenv=require('dotenv').config()
const path=require('path')
const app=express()
const port=process.env.PORT||4000
const url='mongodb+srv://dbUser:toosecret@cluster0.dss6s.mongodb.net/FullThrottle?retryWrites=true&w=majority'||'mongodb://localhost:27017/ft'
app.use(cors());
mongoose.connect( url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use('/api/member',member);
app.use(express.static(path.join(__dirname, '/Views/fprt/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/Views/fprt/build/index.html'))
);

app.listen(port,()=>console.log(`server is running on ${port}`))