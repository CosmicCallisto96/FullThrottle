const express=require('express')
const expressAsyncHandler=require('express-async-handler');
const data=require('../data.js')
const Member=require('../Model/memberModel.js')
const memberRouter = express.Router();
memberRouter.get('/seed',expressAsyncHandler(async (req, res) => {
    const val=data.members.map((val)=>({...val}))
        const createdMember = await Member.insertMany(val);
        res
          .status(201)
          .send({ message: 'Members are inserted', members: createdMember });
    }))
    memberRouter.get('/',expressAsyncHandler(async (req, res) => {
            const fetchMembers = await Member.find({});
            res
              .status(201)
              .send(fetchMembers);
        }))
module.exports=memberRouter